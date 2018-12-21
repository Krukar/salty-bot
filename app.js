const Discord = require('discord.js');

const client = new Discord.Client();

require('dotenv').config();

// When joining a new server
client.on('guildCreate', guild => guild.createChannel('the-salt-mines', 'text'));

client.on('message', message => {
  if (message.channel.type !== 'dm') return;

  const server = client.guilds.get(process.env.SERVER);
  const mines = server.channels.find(channel => channel.name === 'the-salt-mines');
  mines.send(message.content);
});

client.login(process.env.TOKEN);
