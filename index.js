// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const path = require('path');

const dotenv = require('dotenv');
// Import required bot configuration.
const ENV_FILE = path.join(__dirname, '.env');
dotenv.config({ path: ENV_FILE });

const restify = require('restify');

const ngrok = require('ngrok');

// eslint-disable-next-line no-unused-vars
const fs = require('fs');

const express = require('express');

// Import required bot services.
// See https://aka.ms/bot-services to learn more about the different parts of a bot.
const { BotFrameworkAdapter, ConversationState, MemoryStorage, UserState } = require('botbuilder');

// This bot's main dialog.
const { EchoBot } = require('./bot');

const { SlackAdapter } = require('botbuilder-adapter-slack');

const { isSlack, shouldSend } = require('./utils');

const { WebAdapter } = require('botbuilder-adapter-web');

// eslint-disable-next-line no-unused-vars
const webAdapter = new WebAdapter();
// eslint-disable-next-line no-unused-vars
const { UoGInfoRetreiver } = require('./UoGInfoRetreiver');

// eslint-disable-next-line no-unused-vars
const { prerequisites } = require('./find-prereqs');

const slackAdapter = new SlackAdapter({
    clientSigningSecret: '0250919d12a65f00f24bc9cccac51df1',
    botToken: 'xoxb-1407961777297-1429423198787-mEoJM6OpodNz8iCllYt1P7qA'
});

// Create HTTP server
const server = express();

server.use(restify.plugins.bodyParser());
server.use(express.static('public'));
server.listen(process.env.port || process.env.PORT || 8080, async () => {
    console.log('ngrok tunnel:');
    const url = await ngrok.connect(8080);
    console.log(url);
    console.log(`\n${ server.name } listening to ${ server.url }`);
    console.log('\nGet Bot Framework Emulator: https://aka.ms/botframework-emulator');
    console.log('\nTo talk to your bot, open the emulator select "Open Bot"');
});

// Define state store for your bot.
// See https://aka.ms/about-bot-state to learn more about bot state.
const memoryStorage = new MemoryStorage();

// Create conversation and user state with in-memory storage provider.
const conversationState = new ConversationState(memoryStorage);
const userState = new UserState(memoryStorage);

// Create adapter.
// See https://aka.ms/about-bot-adapter to learn more about how bots work.
const adapter = new BotFrameworkAdapter({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

// Catch-all for errors.
const onTurnErrorHandler = async (context, error) => {
    // This check writes out errors to console log .vs. app insights.
    // NOTE: In production environment, you should consider logging this to Azure
    //       application insights.
    console.error(`\n [onTurnError] unhandled error: ${ error }`);

    // Send a trace activity, which will be displayed in Bot Framework Emulator
    await context.sendTraceActivity(
        'OnTurnError Trace',
        `${ error }`,
        'https://www.botframework.com/schemas/error',
        'TurnError'
    );

    // Send a message to the user
    await context.sendActivity('The bot encountered an error or bug.');
    await context.sendActivity('To continue to run this bot, please fix the bot source code.');
};

// Set the onTurnError for the singleton BotFrameworkAdapter.
adapter.onTurnError = onTurnErrorHandler;

// Create the main dialog.
const myBot = new EchoBot(conversationState, userState);

// Listen for incoming requests.

server.get('/', (req, res) => {
    res.sendFile('index.html');
});

server.post('/api/messages', (req, res) => {
    if (isSlack(req.headers['user-agent'])) {
        slackAdapter.processActivity(req, res, async (context) => {
            // eslint-disable-next-line no-unused-expressions
            shouldSend(context) ? await myBot.run(context) : '';
        });
    } else {
        // This part isn't working
        adapter.processActivity(req, res, async (context) => {
            // Route to main dialog.
            await myBot.run(context);
        });
    }
});

server.get('/api/web/welcome', (req, res) => {
    return res.send({message: 'Hello, I\'m a bot designed to help with BCOMP scheduling and inquiries. To get started, please respond with your name.'});
})

server.post('/api/web', (req, res) => {
    webAdapter.processActivity(req, res, async(context) => {
        context.activity.from = {id: 'fromWebApp'};
        context.activity.conversation.id = 'webApplicationId';
        await myBot.run(context);
    });
});

// Listen for Upgrade requests for Streaming.
server.on('upgrade', (req, socket, head) => {
    // Create an adapter scoped to this WebSocket connection to allow storing session data.
    const streamingAdapter = new BotFrameworkAdapter({
        appId: process.env.MicrosoftAppId,
        appPassword: process.env.MicrosoftAppPassword
    });
    // Set onTurnError for the BotFrameworkAdapter created for each connection.
    streamingAdapter.onTurnError = onTurnErrorHandler;

    streamingAdapter.useWebSocket(req, socket, head, async (context) => {
        // After connecting via WebSocket, run this logic for every request sent over
        // the WebSocket connection.
        await myBot.run(context);
    });
});
