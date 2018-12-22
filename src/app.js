const Discord = require('discord.js');
const events = require('./events/index.js');

const client = new Discord.Client();

require('dotenv').config();

// When connected to Discord
client.on('ready', () => events.ready(client));

// When joining a new server
client.on('guildCreate', guild => events.guildCreate(guild));

// When a user messages the bot
client.on('message', message => events.message(client, message));

client.login(process.env.TOKEN);
