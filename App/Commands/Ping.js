'use strict';

const {Command} = require('sammeh-discord-bot-framework');

class Ping extends Command {

	constructor()
	{
		super();
		this._command     = 'ping {test?}';
		this._name        = 'Ping';
		this._description = 'Returns pong!';

	}

	async handle(message)
	{

		message.channel.send('Ponggggg!');

		this.instance.services.TestServiceProvider.doSomething();
	}

}

module.exports = Ping;