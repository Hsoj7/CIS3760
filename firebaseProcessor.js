const firebase = require('firebase');
const admin = require('firebase-admin');

const firebaseSetup = async function() {
    if (firebase.apps.length === 0) {
        const firebaseConfig = {
            apiKey: 'AIzaSyAdknNjPkOjAkws1ST1cwiKoixSnflTL2A',
            authDomain: 'uogbot.firebaseapp.com',
            databaseURL: 'https://uogbot.firebaseio.com',
            projectId: 'uogbot',
            storageBucket: 'uogbot.appspot.com',
            messagingSenderId: '673210718372',
            appId: '1:673210718372:web:eed7329aab4b800483ae31',
            measurementId: 'G-L5366G1SJQ'
        };
        await firebase.initializeApp(firebaseConfig);
    }
};

const createAccount = async function(name, email, password) {
    let errorReturn;
    await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            // this waits for the user to be authenticated, then adds a corresponding document with
            // their information in the Cloud Firestore section
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    const serviceAccount = require('./uogbot-firebase-adminsdk-i862b-af30c99457.json');
                    admin.initializeApp({
                        credential: admin.credential.cert(serviceAccount),
                        databaseURL: 'https://uogbot.firebaseio.com'
                    });

                    const db = admin.firestore();
                    const docRef = db.collection('users').doc(user.uid);
                    docRef.set({
                        Name: name,
                        Email: email,
                        UID: user.uid
                    });
                }
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            errorReturn = error.code;
            console.log('createAccount FIREBASE AUTH ERROR: ' + errorCode + ' ' + errorMessage);
        });
    if (typeof errorReturn === 'undefined') {
        return '';
    } else {
        return errorReturn;
    }
};

const login = async function(email, password) {
    let errorReturn;
    await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                }
            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            errorReturn = error.code;
            console.log('login FIREBASE AUTH ERROR: ' + errorCode + ' ' + errorMessage);
        });
    if (typeof errorReturn === 'undefined') {
        return '';
    } else {
        return errorReturn;
    }
};

const logout = async function() {
    let errorReturn;
    await firebase.auth().signOut().then(function() {
        firebase.app().delete();
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        errorReturn = error.code;
        console.log('logout FIREBASE AUTH ERROR: ' + errorCode + ' ' + errorMessage);
    });
    if (typeof errorReturn === 'undefined') {
        return '';
    } else {
        return errorReturn;
    }
};

const testLoggedIn = function() {
    if (firebase.apps.length === 0) {
        return false;
    } else if (firebase.apps.length > 0) {
        return true;
    }
};

module.exports = {
    firebaseSetup,
    createAccount,
    login,
    logout,
    testLoggedIn
};
