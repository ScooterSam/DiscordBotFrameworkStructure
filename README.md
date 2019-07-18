# Getting Started

## Why?

I set out to create this framework for a few reasons. I come from the Laravel Background, I enjoy coding PHP and I like my code to be extremely OO.

Originally I only planned to write a simple bot for my self... and it ended up being this framework after a couple of years.

Discord.js's command handling framework is very nice, but it's also super basic... doesn't allow for too much customisation and you can't extend any of it.

## Cloning the repository

GitHub allows us to create a new project from the Discord Framework Structure. Visit this link to create your repository: [https://github.com/ScooterSam/DiscordBotFrameworkStructure/generate](https://github.com/ScooterSam/DiscordBotFrameworkStructure/generate)

Once your repository has generated, you will be able to clone it. We are going to clone from the default repository, so we open our console and run

```
$ git clone https://github.com/ScooterSam/DiscordBotFrameworkStructure.git DiscordBot
```

This will create a new folder in our current working directly, named "DiscordBot" this contains everything we need to start writing our own simple bot!

## Configuring our project 

Most of the frameworks configurations are very simple. To start off we have an **.example.env** file by default. 

If we copy this file and name it **".env"** the framework will load its most basic configs from here. Such as discord bot id, database credentials, discord bot token, etc

```text
DISCORD_BOT_ID=
DISCORD_INTRO_CHANNEL=
DISCORD_TOKEN=

ENV=dev
DB_NAME=
DB_PORT=3306
DB_USER=root
DB_PASS=
DB_HOST=localhost
```

{% hint style="info" %}
**Make sure to copy the .example.env file and rename it to .env**
{% endhint %}

