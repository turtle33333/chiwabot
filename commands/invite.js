const { Command } = require('discord-akairo');
const Discord = require('discord.js');
class InviteCommand extends Command {
    constructor() {
        super('invite', {
           aliases: ['invite','inv']
        });
    }

    exec(message) {
		const embed = new Discord.RichEmbed()
		.setColor(0xffa500)	
		.setAuthor("Chiwa","https://cdn.discordapp.com/attachments/455691327418400769/467989696211976193/HarusakiChiwa_zps46cbd7f0.gif")
		.setThumbnail("https://cdn.discordapp.com/attachments/455691327418400769/468057913643237386/chiwa_logo.png")
    .setTitle("Click here to invite me to your server")
		.setURL("https://discordapp.com/oauth2/authorize?client_id=467393493745139732&scope=bot&permissions=8")
		 message.channel.send({embed});
    }
}

module.exports = InviteCommand;