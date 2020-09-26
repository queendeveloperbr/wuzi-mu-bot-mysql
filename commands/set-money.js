const
    { MessageEmbed } = require('discord.js'),
    config = require('../assests/config.json')
module.exports = {
    run: async (client,message,args) => {

        let lang = await client.connection.query(`SELECT * FROM guild WHERE id = ${message.guild.id}`, async (err, row) =>{
            l = require(`../languages/lang.${row[0].lang}.json`),
            msg = l.addmoney.split('|'),
              user = message.guild.member(message.mentions.users.first() || message.author)
              if(!args[0]) return message.channel.send(msg[0])
              client.connection.query(`UPDATE eco SET money = '${args[0]}' WHERE id = ${user.id}`)
              message.channel.send(msg[1].replace('%d',user.user.tag).replace('%a',args[0]))
        })

  },
    cmd: {
      name: "set-money",
      aliases: ["set"],
      category: "eco",
      desc: "none",
      usage: "%!add-money <money> [@user#0000]"
    }
}
