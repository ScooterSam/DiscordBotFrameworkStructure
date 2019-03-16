const database = require('./src/Bot/Base/Database');

async function migrate()
{
	await database.knex.schema.createTableIfNotExists('States', table => {
		table.increments('id').primary();
		table.string('discord_user_id');
		table.string('key');
		table.longText('value');
		table.timestamps();
	});

}

migrate()
	.then(() => {
		console.log('Migrated successfully.');
		process.exit(1)
	})
	.catch(console.log);
