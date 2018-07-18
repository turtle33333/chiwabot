const { Command } = require('discord-akairo');
const Discord = require('discord.js');
const client = new Discord.Client()
class AvatarCommand extends Command {
    constructor() {
        super('avatar', {
           aliases: ['avatar','pfp','pic','picture'] 
        });
    }

    exec(message, GuildMember) {
  function avatar(){
	if(message.mentions.users.first()){
		const embed = new Discord.RichEmbed()
    
    .setColor(0xffa500)
		.setAuthor(message.mentions.users.first().tag)
		.setTitle("Avatar URL Link")
		.setURL(message.mentions.users.first().avatarURL)
		.setImage(message.mentions.users.first().avatarURL)
		 message.channel.send({embed})
	}
	
	else{
	const embed = new Discord.RichEmbed()
	  
    .setColor(0xffa500)
		.setAuthor(message.author.tag)
		.setTitle("Avatar URL Link")
		.setURL(message.author.avatarURL)
		.setImage(message.author.avatarURL)
		message.channel.send({embed})
}
  

            }
	
  
      avatar()
    }
}

module.exports = AvatarCommand;




