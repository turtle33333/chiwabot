const { Command } = require('discord-akairo');
const Discord = require('discord.js');
class ServerinfoCommand extends Command {
    constructor() {
        super('serverinfo', {
           aliases: ['serverinfo','svinfo'] 
        });
    }

    exec(message) {
    	const embed = new Discord.RichEmbed()
      .setAuthor(`${message.guild.name}`,`${message.guild.iconURL}`)
      .setThumbnail(message.guild.iconURL)
	  	.setColor(0xffa500)	
      .setDescription(`ID: ${message.guild.id}`)
      .addField(`Verification Level`,`${message.guild.verificationLevel}`, true)
      .addField(`Server region`, `${message.guild.region}`, true)      
      .addField(`AFK Channel`, `${message.guild.afkChannel}`, true) 
      .addField(`AFK Timeout`, `${message.guild.afkTimeout} seconds`,true)
      .addField(`Member Count`, `${message.guild.memberCount} Members`)
      .addField(`Server Owner`, `${message.guild.owner}, (${message.guild.ownerID})`)
      .addField(`Created on`,`${message.guild.createdAt}`)

  message.channel.send({embed});

      
    }
}

module.exports = ServerinfoCommand;