const
  { MessageEmbed } = require('discord.js'),
  config = require('../assests/config.json')

module.exports = {
    run: async (client,message,args) => {
      
      let user = message.guild.member(message.mentions.users.first() || message.author)
       await client.connection.query(`SELECT * FROM guild WHERE id = ${message.guild.id}`, async (err, row) =>{
        await client.connection.query(`SELECT * FROM eco WHERE id = ${user.id}`, async (err, rows) =>{
        let 
         lang = row[0].lang,
          l = require(`../languages/lang.${lang}.json`),
          msg = l.balance.split('|'),
             money = rows[0].money,
              xp = rows[0].xp,
               lvl = rows[0].lvl,
        
        a = new MessageEmbed()
        .setColor(config.color)
        .setTitle(msg[2] + user.user.username)
        .setDescription(`${msg[0].replace('%d',money)}\n${msg[1].replace('%d',xp)}\nlvl: ${lvl}`)
        message.channel.send(a)
   })
  })
},
  cmd: {
    name: "balance",
    aliases: ['bal'],
    category: "eco",
    desc: "none",
    usage: `%!balance [@user#0000]`
 }
}
