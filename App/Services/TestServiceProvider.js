const {ServiceProvider} = require('sammeh-discord-bot-framework');

class ConfigServiceProvider extends ServiceProvider {

	handle()
	{
		return this;
	}

	async onBoot()
	{
		console.log('HELLO');
	}

	doSomething()
	{
		console.log('hi');
	}
}

module.exports = ConfigServiceProvider;