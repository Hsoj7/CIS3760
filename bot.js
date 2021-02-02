// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory } = require('botbuilder');
const { RequestProcessor } = require('./RequestProcessor');

// The accessor names for the conversation data and user profile state property accessors.
const CONVERSATION_DATA_PROPERTY = 'conversationData';
const USER_PROFILE_PROPERTY = 'userProfile';

class EchoBot extends ActivityHandler {
    constructor(conversationState, userState) {
        super();
        this.conversationDataAccessor = conversationState.createProperty(CONVERSATION_DATA_PROPERTY);
        this.userProfileAccessor = userState.createProperty(USER_PROFILE_PROPERTY);

        // The state management objects for the conversation and user state.
        this.conversationState = conversationState;
        this.userState = userState;
        this.textProcessor = new RequestProcessor();

        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        this.onMessage(async (context, next) => {
            // Check if message is from bot in slack case
            const userProfile = await this.userProfileAccessor.get(context, {});
            const conversationData = await this.conversationDataAccessor.get(context, { promptedForUserName: true });
            if (!userProfile.name) {
                // First time around this is undefined, so we will prompt user for name.
                if (conversationData.promptedForUserName) {
                    // Set the name to what the user provided.
                    userProfile.name = context.activity.text;

                    // Acknowledge that we got their name.
                    await context.sendActivity(`Hello, ${ context.activity.text }. If I have your name wrong, please enter wrong. Type anything to continue.`);

                    // Reset the flag to allow the bot to go though the cycle again.
                    conversationData.promptedForUserName = false;
                } else {
                    // Prompt the user for their name.
                    await context.sendActivity('What is your name?');

                    // Set the flag to true, so we don't prompt in the next turn.
                    conversationData.promptedForUserName = true;
                }
            } else {
                const replyText = `Hello, ${ context.activity.text }. If I have your name wrong, please enter wrong. Type anything to continue.`;
                // Add message details to the conversation data.
                conversationData.timestamp = context.activity.timestamp.toLocaleString();
                conversationData.channelId = context.activity.channelId;

                // Display state data.
                if (context.activity.text === 'wrong') {
                    userProfile.name = null;
                    conversationData.promptedForUserName = true;
                    await context.sendActivity('What is your name?');
                } else {
                    if (conversationData.promptedForUserName) {
                        await context.sendActivity(replyText);
                        conversationData.promptedForUserName = false;
                    } else {
                        var ret = await this.textProcessor.handleUserMsg(context.activity.text, userProfile);
                        await context.sendActivity(ret);
                    }
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;

            const welcomeText = 'Hello, I\'m a bot designed to help with BCOMP scheduling and inquiries. To get started, please respond with your name.';
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }

    async run(context) {
        await super.run(context);
        // Save any state changes. The load happened during the execution of the Dialog.
        await this.conversationState.saveChanges(context, false);
        await this.userState.saveChanges(context, false);
    }
}

module.exports.EchoBot = EchoBot;
