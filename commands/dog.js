const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const snekfetch = require('snekfetch');
class dogCommand extends Command {
    constructor() {
        super('dog', {
           aliases: ['dog','doggy']
        });
    }

  async  exec(message) {
		const { body } = await snekfetch.get('https://dog.ceo/api/breeds/image/random');
    message.channel.send(body.message)
    }
}

module.exports = dogCommand;