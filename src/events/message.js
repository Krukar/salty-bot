const utilities = require('./../utilities/index.js');

module.exports = (client, message) => {
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

  // /salt
  if (message.content.startsWith('/salt')) {
    utilities.channel(client, message);
    return;
  }

  utilities.guilds(client, message);
};
