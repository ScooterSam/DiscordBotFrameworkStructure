const {Bot} = require('sammeh-discord-Bot-framework');

const {Database} = require('sammeh-discord-Bot-framework');

let discordBot = new Bot();
discordBot.initiate().then(response => {
	console.log('[BOT] Everything is loaded.');
});
