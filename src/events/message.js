const utilities = require('./../utilities/index.js');

module.exports = (client, message) => {
  // Randomly say ba dum tsh
  if ((Math.floor(Math.random() * 1000) + 1) === 1000) {
    message.channel.send('BA DUM TSH!');
    return;
  }

  // If someone mentions the bot in any channel respond with help
  if (message.content.includes(`<@${client.user.id}>`)) {
    message.channel.send(utilities.help());
    return;
  }

  // Only respond to messages in DM and not from other bots
  if (message.channel.type !== 'dm' || message.author.bot) return;

  // Help
  if (message.content.toLowerCase() === 'help') {
    message.channel.send(utilities.help());
    return;
  }

  // If message starts with / then it's a channel message
  if (message.content.startsWith('/')) {
    utilities.channel(client, message);
    return;
  }

  utilities.guilds(client, message);
};
