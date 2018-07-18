const { Command } = require('discord-akairo');
const Discord = require('discord.js');
class HelpCommand extends Command {
    constructor() {
        super('help', {
           aliases: ['help','h']
        });
    }

    exec(message) {
		const embed = new Discord.RichEmbed()
		.setColor(0xffa500)	
		.setAuthor("Chiwa Help Menu","https://cdn.discordapp.com/attachments/455691327418400769/467989696211976193/HarusakiChiwa_zps46cbd7f0.gif")
		.setThumbnail("https://cdn.discordapp.com/attachments/455691327418400769/468057913643237386/chiwa_logo.png")
    .setDescription("The prefix is **c!**")
    .addField("invite", "Invite me to your server")
    .addField("serverinfo", "Show this server info")
    .addField("info", "Show the bot's info")
    .addField("avatar", "Show the avatar of yourself or a specific user")
    .addField("dog", "Show a picture of dogs")
    .addField("urban", "Search for a keyword from Urban Dictionary")
		 message.channel.send({embed});
    }
}

module.exports = HelpCommand;