const Disord = require('discord.js')
const client = new Discord.Client();


function ready(text) {
    client.on('ready', async () => {
        console.log(text);
    })
}

function message(callback) {
    client.on('message', async (message) => {
        callback
    })
}

function login(token) {
    client.login(token);
}