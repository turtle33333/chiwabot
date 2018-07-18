const { AkairoClient } = require('discord-akairo');
const Discord = require("discord.js");




const client = new AkairoClient({
    ownerID: '185713706343071745',
    prefix: 'c!',
    commandDirectory: './commands/'
}, {
    disableEveryone: true
});

client.login('NDY3MzkzNDkzNzQ1MTM5NzMy.DisGCA.xJuPl1tVVyhyx7dxGzQ4tstFRo8').then(() => {
  console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(`c!help`);
        
  
});

