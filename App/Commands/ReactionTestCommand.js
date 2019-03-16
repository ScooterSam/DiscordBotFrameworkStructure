'use strict';

const {Command} = require('sammeh-discord-bot-framework');

class ReactionCommand extends Command {

	constructor()
	{
		super();
		this._command     = 'reaction';
		this._name        = 'Reaction';
		this._description = 'Returns reaction test!';

	}

	async handle(message)
	{
		this.instance.handler('ReactionInputMessageHandler')
			.confirm(message, 'Hello!')
			.addReaction('☑', () => {
				message.reply('A checkmark :o');
			})
			.onNoInput(() => {
				message.reply('Aww bro, why u no respond to meh');
			})
			.send();

	}

}

module.exports = ReactionCommand;