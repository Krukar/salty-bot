const clean = require('./clean.js');

module.exports = (client, message) => {
  // Global Salt
  client.guilds.forEach((guild) => {
    const mines = guild.channels.find(channel => channel.name === 'the-salt-mines');

    if (mines) {
      const response = clean(message.content);
      mines.send(response);
    }
  });
};
