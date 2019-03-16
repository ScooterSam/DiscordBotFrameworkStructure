const {EventListener} = require('sammeh-discord-bot-framework');

class MessageEvent extends EventListener {

	async handle(message)
	{
		console.log('message event');
	}

}

module.exports = MessageEvent;