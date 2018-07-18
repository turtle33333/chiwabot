const { Command } = require('discord-akairo');

class RefreshCommand extends Command {
    constructor() {
        super('refresh', {
            aliases: ['refresh'],
            ownerOnly: true,
          
        });
    }

    async exec(message) {
const m = await  message.reply("Refreshing Program.")
process.exit(1) 
    }
}

module.exports = RefreshCommand;