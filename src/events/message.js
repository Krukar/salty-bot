const utilities = require('./../utilities/index.js');

module.exports = (client, message) => {
  if (message.channel.type !== 'dm' || message.author.bot) return;

  // Help
  if (message.content.toLowerCase() === 'help') {
    message.channel.send('It appears you are salty. Would you like to spread some salt? ```Anything you message me I will send annonymously to the salt mines.\nIf you would like to target a specific channel then try /salt CHANNELID Your salty message.\nYou can find the CHANNELID by right clicking on a channel and selecting Copy ID.```');
    return;
  }

  // /salt
  if (message.content.startsWith('/salt')) {
    utilities.channel(client, message);
    return;
  }

  utilities.guilds(client, message);
};
