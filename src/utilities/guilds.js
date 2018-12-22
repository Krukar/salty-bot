const modify = require('./modify.js');

module.exports = (client, message) => {
  // Global Salt
  client.guilds.forEach((guild) => {
    const mines = guild.channels.find(channel => channel.name === 'the-salt-mines');

    if (mines) {
      const response = modify(message.content);
      mines.send(response);
    }
  });
};
