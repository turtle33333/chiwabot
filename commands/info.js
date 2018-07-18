const { Command } = require('discord-akairo');
const Discord = require('discord.js');
var start = Date.now();
const date = new Date();
class InfoCommand extends Command {
    constructor() {
        super('info', {
           aliases: ['info'] 
        });
    }

    exec(message) {
   var time = process.uptime();
   var uptime = (time + "").toHHMMSS();
		const embed = new Discord.RichEmbed()
		.setColor(0xffa500)	
		.setAuthor("Chiwa's Info","https://cdn.discordapp.com/attachments/455691327418400769/467989696211976193/HarusakiChiwa_zps46cbd7f0.gif")
		.setThumbnail("https://cdn.discordapp.com/attachments/455691327418400769/468057913643237386/chiwa_logo.png")
    .addField('Ping',`${Date.now() - message.createdTimestamp}ms`)
    .addField('Uptime',`${uptime}`)
    .addField('Nodejs Version', `${process.version}`)
    .addField('Started on',`${date}`)
		 message.channel.send({embed});

    }
}

module.exports = InfoCommand;

String.prototype.toHHMMSS = function () {
   var sec_num = parseInt(this, 10); // don't forget the second param
   var hours   = Math.floor(sec_num / 3600);
   var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
   var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
   if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}