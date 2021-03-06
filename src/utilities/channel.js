const clean = require('./clean.js');
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

  let response = clean(message.content);

  if (split[0] === '/clap') {
    response = modify.clap(response);
  } else if (split[0] === '/jojo') {
    response = modify.jojo(response);
  }

  if (!response) {
    message.channel.send('Invalid message. Images and blank messages cannot be sent.');
    return;
  }

  // Call out the bullshit
  if (response.toUpperCase().includes('BA DUM TSH')) {
    channel.send(`@here ${message.author.username} just tried to fake a BA DUM TSH!`);
    return;
  }

  channel.send(response);
};
