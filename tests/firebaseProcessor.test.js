// IMPORTANT: When testing using this file, the account test@gmail.com MUST NOT exist already. Firebase checks for an existing email before creating an account

const { firebaseSetup } = require('../firebaseProcessor');
const { createAccount } = require('../firebaseProcessor');
const { logout } = require('../firebaseProcessor');
const { RequestProcessor } = require('../RequestProcessor');

firebaseSetup();

// upon successful create and logout, the individual functions do not return anything
// eslint-disable-next-line no-undef
test('CreateAccount', async () => {
    // eslint-disable-next-line no-undef
    await expect(createAccount('Josh', 'test@gmail.com', 'testtest')).resolves
        // eslint-disable-next-line func-call-spacing
        .toBe('');
});

// eslint-disable-next-line no-undef
test('Logout', async () => {
    // eslint-disable-next-line no-undef
    await expect(logout()).resolves
        // eslint-disable-next-line func-call-spacing
        .toBe('');
});

// eslint-disable-next-line no-undef
test('Targets the function to create account in requestProcessor.js where it would be actually ran with incorrect input', async () => {
    var reqProc = new RequestProcessor();
    // eslint-disable-next-line no-undef
    await expect(reqProc.handleUserMsg('create', 1000)).resolves
        // eslint-disable-next-line func-call-spacing
        .toBe('Create account failed. Could not find an email address.');
});

// eslint-disable-next-line no-undef
test('Targets the function to login in requestProcessor.js where it would be actually ran with incorrect input', async () => {
    var reqProc = new RequestProcessor();
    // eslint-disable-next-line no-undef
    await expect(reqProc.handleUserMsg('login', 1000)).resolves
        // eslint-disable-next-line func-call-spacing
        .toBe('Login failed. Could not find an email address.');
});

// eslint-disable-next-line no-undef
test('Targets the signin help command', async () => {
    var reqProc = new RequestProcessor();
    // eslint-disable-next-line no-undef
    await expect(reqProc.handleUserMsg('help', 1000)).resolves
        // eslint-disable-next-line func-call-spacing
        .toBe('Create account example - create "name":"josh", "email":"test@gmail.com", "password":"testtest" Login example - login "email":"test@gmail.com", "password":"testtest" Logout example - logout');
});
