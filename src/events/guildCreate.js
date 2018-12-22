module.exports = (guild) => {
  // See if there already is a #the-salt-mines
  const mines = guild.channels.find(channel => channel.name === 'the-salt-mines');

  // If there is then return
  if (mines !== null) return;

  // Create the channel
  guild.createChannel('the-salt-mines', 'text');
};
