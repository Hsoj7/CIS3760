const { getSemAvlbity } = require('./getSemAvlbity');
const { prerequisites } = require('./find-prereqs');
const { searchForCourseKeywords } = require('./searchForCourseKeywords');

const { firebaseSetup } = require('./firebaseProcessor');
const { createAccount } = require('./firebaseProcessor');
const { login } = require('./firebaseProcessor');
const { logout } = require('./firebaseProcessor');
const { testLoggedIn } = require('./firebaseProcessor');

class RequestProcessor {
    async handleUserMsg(userMsg, user) {
        var retmsg;
        // eslint-disable-next-line new-cap
        var x = new prerequisites();
        var code = userMsg.match(/((\D{3}|\D{4})(\*|\s|)\d{4})/g);
        var codeSection = '';
        var codeNum = 0;
        if (userMsg.includes('semester')) {
            if (code === null) {
                return 'please provide a course code';
            }
            code = code.toString().replace(/\*/g, '');
            code = code.replace(/\s/g, '');
            codeSection = code.slice(0, (code.length - 4));
            codeNum = code.substr((code.length - 4), 4);
            retmsg = await getSemAvlbity(codeSection, codeNum);
        } else if (userMsg.includes('prereq')) {
            if (code === null) {
                return 'please provide a course code';
            }
            code = code.toString().replace(/\*/g, '');
            code = code.replace(/\s/g, '');
            codeSection = code.slice(0, (code.length - 4));
            codeNum = code.substr((code.length - 4), 4);
            retmsg = JSON.stringify(await x.findPrereq(codeSection, codeNum));
        } else if (userMsg.includes('help')) {
            retmsg = 'Create account example - create "name":"josh", "email":"test@gmail.com", "password":"testtest" Login example - login "email":"test@gmail.com", "password":"testtest" Logout example - logout';
        } else if (userMsg.includes('create')) {
            // have the user enter data in JSON format for now
            // example:
            // create "name":"josh", "email":"test@gmail.com", "password":"testtest"
            let createArray = userMsg;
            createArray = '{' + createArray.slice(7, createArray.length) + '}';
            const UserObject = JSON.parse(createArray);
            const loggedIn = testLoggedIn();

            if (typeof UserObject.email === 'undefined') {
                retmsg = 'Create account failed. Could not find an email address.';
            } else {
                if (loggedIn === false) {
                    firebaseSetup();
                    const createReturn = await createAccount(UserObject.name, UserObject.email, UserObject.password);
                    if (createReturn === '') {
                        retmsg = 'Success. You are now logged in as ' + UserObject.email + '. To logout, simply type logout.';
                    } else {
                        retmsg = 'Action failed. ' + UserObject.email + ' already exists.';
                        logout();
                    }
                } else {
                    retmsg = 'You are already logged in. Logout first to create a new account.';
                }
            }
        } else if (userMsg.includes('login')) {
            // have the user enter data in JSON format for now
            // example:
            // login "email":"test@gmail.com", "password":"testtest"
            let createArray = userMsg;
            createArray = '{' + createArray.slice(6, createArray.length) + '}';
            const UserObject = JSON.parse(createArray);
            if (typeof UserObject.email === 'undefined') {
                retmsg = 'Login failed. Could not find an email address.';
            } else {
                if (testLoggedIn() === false) {
                    firebaseSetup();
                    const loginReturn = await login(UserObject.email, UserObject.password);
                    if (loginReturn === '') {
                        retmsg = 'Successfully logged in. You are now logged in as ' + UserObject.email + '. To logout, simply type logout.';
                    } else {
                        retmsg = 'Login failed. ' + UserObject.email + ' does not exist.';
                    }
                } else if (testLoggedIn() === true) {
                    retmsg = 'You are already logged in as ' + UserObject.email;
                }
            }
        } else if (userMsg.includes('logout')) {
            if (testLoggedIn() === true) {
                logout();
                retmsg = 'You have successfully logged out.';
            } else {
                retmsg = 'You are not logged in.';
            }
        } else if ((userMsg.includes('What') || userMsg.includes('what')) && userMsg.includes('course')) {
            retmsg = await searchForCourseKeywords(userMsg);
        } else {
            retmsg = userMsg + ' is not a vaild command.';
        }

        return retmsg;
    }
}
module.exports.RequestProcessor = RequestProcessor;
