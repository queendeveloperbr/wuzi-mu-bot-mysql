const
  { MessageEmbed } = require('discord.js'),
  config = require('../assests/config.json'),
  db = require('mysql')

module.exports = {
  run: async (client,message,args) => {
  const
    lang = client.connection.query(`SELECT * FROM guild WHERE id = ${message.guild.id}`, (err, row) => {
      l = require(`../languages/lang.${row[0].lang}.json`),
      msg = l.prefix.split('|')

    if(!args[0]) return message.channel.send(msg[0])
    if(args[0].length > 5) return message.channel.send(msg[1])
    let embed = new MessageEmbed().setDescription(`> Novo Prefixo: ${args[0]}`).setColor('CYAN')
    message.channel.send(embed)
    client.connection.query(`UPDATE guild SET prefix = '${args[0]}' WHERE id = ${message.guild.id}`)

  })
},
  cmd: {
    name: "prefix",
    aliases: ['pref'],
    category: "guild-settings",
    desc: "none",
    usage: `%!prefix <your prefix>`
 }
}
