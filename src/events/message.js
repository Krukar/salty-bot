module.exports = (client, message) => {
  if (message.channel.type !== 'dm' || message.author.bot) return;

  // Help
  if (message.content.trim().toLowerCase() === 'help') {
    message.channel.send('help commands TBA');
  }

  // /salt
  if (message.content.startsWith('/salt')) {
    const ids = message.content.match(/(\d+)/g);

    if (!ids) {
      message.channel.send('Cannot send message, incorrect format. Type help for a list of commands');
      return;
    }

    const server = client.guilds.get(ids[0]);

    if (!server) {
      message.channel.send('Cannot send message. Server ID was incorrect');
      return;
    }

    const channel = server.channels.get(ids[1]);

    if (!channel) {
      message.channel.send('Cannot send message. Channel ID was incorrect');
      return;
    }

    const response = message.content.replace(/^\/salt \d+ \d+/, '').trim();

    if (!response) {
      message.channel.send('Cannot send message. Please include a message');
      return;
    }

    channel.send(response);
    return;
  }

  // Global Salt
  client.guilds.forEach((guild) => {
    const mines = guild.channels.find(channel => channel.name === 'the-salt-mines');

    if (mines) {
      mines.send(message.content);
    }
  });
};
