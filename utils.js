let messageBatch = [];

const isSlack = (userAgent) => {
    // eslint-disable-next-line no-unneeded-ternary
    return userAgent.includes('Slackbot') ? true : false;
};
const shouldSend = (context) => {
    if (messageBatch.length >= 1) {
        messageBatch = [];
        return false;
    } else {
        messageBatch.push(context);
        return true;
    }
};

module.exports = {
    isSlack,
    shouldSend
};
