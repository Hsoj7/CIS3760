/* eslint-disable no-undef */
const { EchoBot } = require('../bot');
const { DialogTestClient } = require('botbuilder-testing');
const { WaterfallDialog } = require("botbuilder-dialogs");



test('Checking bot received message', async () => {
    
    let dialog = new WaterfallDialog("test", [
        async (step) => {
            await step.context.sendActivity('hello');
        }
    ]);

    let client = new  DialogTestClient('test', dialog);
    let reply = await client.sendActivity('hello');
    await expect(reply.text).toEqual('hello');
});
