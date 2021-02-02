function getBotWelcome() {
    return "Hello, I'm a bot designed to help with BCOMP scheduling and inquiries. To get started, please respond with your name.";
}

function sendMessageClient(inputStr) {
    return inputStr;
}

$(document).ready(function () {   
    $.ajax({
        type: 'get',
        url: '/api/web/welcome',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data) {
            let text = data.message;
            getBotWelcome(text);
            $(".chat-dialog").append("<p> <b style=\"color:red\">Bot:</b> " + text + "</p>");
        },
    });
    
    $("#send").click( async function () {
        let text = $(".chat-input").val();
        $(".chat-input").val("");
        $.ajax({
            url: '/api/web',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function(data) {
                let text = data[0].text;
                $(".chat-dialog").append("<p> <b style=\"color:red\">Bot:</b> " + text + "</p>");
            },
            data: JSON.stringify({
                text: text, 
                type: 'message', 
                textFormat: 'plain',
                channelId: 'emulator',
                activity: {
                    from: {
                        id: '423e3ed8-4098-4b4b-a90e-b41aacdd01d1'
                    }
                },
                from: {
                    id: '423e3ed8-4098-4b4b-a90e-b41aacdd01d1', 
                    name: 'User', 
                    role: 'user'
                },
                channelData: {
                    clientActivityID: '1606755532194xqla3w8hoq',
                    clientTimestamp: '2020-11-30T16:58:52.194Z'
                },
                entities: [
                    {
                        requiresBotState: true,
                        supportsListening: true,
                        supportsTts: true,
                        type: 'ClientCapabilities'
                    }
                ],
                conversation: { id: '482dfb50-332d-11eb-9d93-015abe261378|livechat' },
                recipient: {
                    id: '482bb160-332d-11eb-bbe2-3d0959854502',
                    name: 'Bot',
                    role: 'bot'
                },
                serviceUrl: 'http://localhost:60242',
                rawTimestamp: '2020-11-30T16:58:52.217Z',
                rawLocalTimestamp: '2020-11-30T11:58:52-05:00',
                callerId: undefined
            })
        })
        $(".chat-dialog").append("<p> <b>You:</b> " + text + "</p>");

    });
});
module.exports = {
    getBotWelcome,
    sendMessageClient
}
