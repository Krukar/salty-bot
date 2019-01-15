module.exports = {
  clap: message => `:clap: ${message.toUpperCase().replace(/ /g, ' :clap: ')} :clap:`,
  jojo: message => `_ゴゴゴ_ 「 ${message.split('').join(' ').toUpperCase()}  」 _ゴゴゴ_`,
};
