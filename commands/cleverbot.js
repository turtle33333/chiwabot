const { Command } = require('discord-akairo');
var cleverbot = require("cleverbot.io"),
bot = new cleverbot("L4P6V0tdZ1orptsa", "H8K1HJI7yZIrHWVXY4jk9UfNwKrp83In");
bot.setNick("Chiwa");
class ClbotCommand extends Command {
    constructor() {
        super('<@467393493745139732>', {
            trigger: "<@467393493745139732>"
        });
    }

    exec(message, match, groups) {
  bot.create(function (err, session) {
        message.channel.startTyping()
      bot.ask(message.content, function (err, response) {      
                                if (err) return message.channel.send(message.author.toString() + ', sorry but an unexpected error occured... ' + err).then(msg => {
                    msg.channel.stopTyping()
                })
                        message.channel.send(message.author.toString() + ', ' + response).then(msg => {
                    msg.channel.stopTyping()
                })
        
            });
      });
    }
}

module.exports = ClbotCommand;