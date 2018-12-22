module.exports = (message) => {
  const modifier = message.toLowerCase();
  let response = message.trim();

  if (modifier.includes('clap')) {
    response = `:clap: ${response.replace(/ /g, ' :clap: ')} :clap:`;
  } else if (modifier.includes('menace') || modifier.includes('menacing') || modifier.includes('jojo') || modifier.includes('evil')) {
    response = `_ゴゴゴ_ 「 ${response.split('').join(' ').toUpperCase()}  」 _ゴゴゴ_`;
  }

  return response;
};
