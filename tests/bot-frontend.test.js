/* eslint-disable no-undef */
const {sendMessageClient, getBotWelcome } = require("../public/main");

describe('Front End Test', () => {
    test('Testing Bot Welcome Message', async () => {
        const str = getBotWelcome();
        expect(str).toBe("Hello, I'm a bot designed to help with BCOMP scheduling and inquiries. To get started, please respond with your name.");
    });
});
