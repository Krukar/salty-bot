const modify = require('./modify.js');

module.exports = (client, message) => {
  // Example message:  /salt 12345 the message

  // Split the message by spaces
  const split = message.content.split(' ');

  // Test if the ID is defined and is valid
  if (!split[1] || !(/^\d+$/.test(split[1]))) {
    message.channel.send('Please provide a channel ID to salt, or type help for a list of commands');
    return;
  }

  const server = client.guilds.find(guild => guild.channels.get(split[1]));

  // If it did not find a server then no server contains a channel with that ID
  if (!server) {
    message.channel.send('Invalid channel ID. Either the ID was wrong or that server does not have Salty Bot.');
    return;
  }

  // If it did find a server then get the correct channel
  const channel = server.channels.get(split[1]);

  // Remove /salt ID from the message
  const response = modify(message.content.replace(/\/salt \d+/, ''));

  if (!response) {
    message.channel.send('Invalid message. Images and blank messages cannot be sent.');
    return;
  }

  channel.send(response);
};
