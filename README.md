# talkee

Helps with BCOMP info and schedule

This bot has been created using [Bot Framework](https://dev.botframework.com), it shows how to create a simple bot that accepts input from the user and echoes it back.

## Prerequisites

- [Node.js](https://nodejs.org) version 10.14.1 or higher

    ```bash
    # determine node version
    node --version
    ```

## To run the bot

- Install modules

    ```bash
    npm install
    ```

- Start the bot

    ```bash
    npm start
    ```

## Using the bot within Slack
- Start the bot

    ```bash
    npm start
    ```

The server will produce a secure ngrok tunnel to localhost.

Copy that url and head to https://api.slack.com/apps/A01CM6A185Q/event-subscriptions?

Note: You must be apart of the Slack workspace to gain access to this page

### Enable Event Subscriptions:

- Copy your ngrok url (https://{ngrok-url}.io/api/messages) into the request URL section. Slack should then Verify the URL.
- Under `Subscribe to Bot Events` add the following (message.channels, message.groups, message.im, message.mpim)
- Save Changes

### Under OAuth & Permissions:
- Go to Redirect URLs and add a new Redirect Url
- Copy your ngrok url (https://{ngrok-url}.io/install/auth) into the Redirect URLs
- Save URLs
- Under `Scopes` add the following (channels:history, chat:write, chat:write:public, groups:history, groups:write, im:history, incoming-webhook, mpim:history)
- Save Changes

### You should be all set!
- Go to slack and send the bot a message directly
- The Bot should be the same as the bot in the Microsoft Emulator!

## Testing the bot using Bot Framework Emulator

[Bot Framework Emulator](https://github.com/microsoft/botframework-emulator) is a desktop application that allows bot developers to test and debug their bots on localhost or running remotely through a tunnel.

- Install the Bot Framework Emulator version 4.9.0 or greater from [here](https://github.com/Microsoft/BotFramework-Emulator/releases)

### Connect to the bot using Bot Framework Emulator

- Launch Bot Framework Emulator
- File -> Open Bot
- Enter a Bot URL of `http://localhost:3978/api/messages`

## Deploy the bot to Azure

To learn more about deploying a bot to Azure, see [Deploy your bot to Azure](https://aka.ms/azuredeployment) for a complete list of deployment instructions.


## Further reading

- [Bot Framework Documentation](https://docs.botframework.com)
- [Bot Basics](https://docs.microsoft.com/azure/bot-service/bot-builder-basics?view=azure-bot-service-4.0)
- [Dialogs](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-concept-dialog?view=azure-bot-service-4.0)
- [Gathering Input Using Prompts](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-prompts?view=azure-bot-service-4.0)
- [Activity processing](https://docs.microsoft.com/en-us/azure/bot-service/bot-builder-concept-activity-processing?view=azure-bot-service-4.0)
- [Azure Bot Service Introduction](https://docs.microsoft.com/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0)
- [Azure Bot Service Documentation](https://docs.microsoft.com/azure/bot-service/?view=azure-bot-service-4.0)
- [Azure CLI](https://docs.microsoft.com/cli/azure/?view=azure-cli-latest)
- [Azure Portal](https://portal.azure.com)
- [Language Understanding using LUIS](https://docs.microsoft.com/en-us/azure/cognitive-services/luis/)
- [Channels and Bot Connector Service](https://docs.microsoft.com/en-us/azure/bot-service/bot-concepts?view=azure-bot-service-4.0)
- [Restify](https://www.npmjs.com/package/restify)
- [dotenv](https://www.npmjs.com/package/dotenv)
