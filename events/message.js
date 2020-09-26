let db = require('mysql'), config = require('../assests/config.json')
let Discord = require('discord.js')
module.exports = async (client,message,guild) => {

  // Sistema de XP e money
  await client.connection.query(`SELECT * FROM eco WHERE id = ${message.author.id}`, async (err, row) =>{
if(row[0].id){
    client.connection.query(`UPDATE eco SET money = ${parseInt(row[0].money) + parseInt(1)} WHERE id = ${message.author.id}`) // прибавляем +1 монет
    client.connection.query(`UPDATE eco SET xp = ${parseInt(row[0].xp) + parseInt(1)} WHERE id = ${message.author.id}`) // прибавляем +1 xp
    if(row[0].xp >= 5000) { 
      message.react('🆙') 
      client.connection.query(`UPDATE eco SET xp = '0' WHERE id = ${message.author.id}`) 
      client.connection.query(`UPDATE eco SET lvl = ${parseInt(row[0].xp) + parseInt(1)} WHERE id = ${message.author.id}`) // добавляет +1 в уровню
    }
  }
})

// Sistema de Linguagens e menções
setTimeout(async()=>{ 
  await client.connection.query(`SELECT * FROM guild WHERE id = ${message.guild.id}`, async (er, row) => {
let
  prefix = row[0].prefix || config.prefix,
  lang = row[0].lang || 'en',
  l = require(`../languages/lang.${lang}.json`),
  msg = l.client.split('|')

if(!message.content.startsWith(prefix)) return
let 
  messageArray = message.content.split(/ +/g),
  command = messageArray[0].toLowerCase(),
  args = messageArray.slice(1),
  cmd = client.commands.get(command.slice(prefix.length)) || client.commands.get(client.aliases.get(command.slice(prefix.length)));
  if(cmd) cmd.run(client,message,args);
  })
 },1000) 

 if(message.content.includes(client.user.id)) {
  const mencionoembed = new Discord.MessageEmbed()
  await client.connection.query(`SELECT * FROM guild WHERE id = ${message.guild.id}`, async (er, row) => {
    let prefix = row[0].prefix
    let lang = row[0].lang
    l = require(`../languages/lang.${lang}.json`),
    msg = l.msgmen.split('|')
  mencionoembed.setDescription(`> ${msg[0]} **${prefix}ajuda** ${msg[1]} \n > ${msg[2]} **${lang}**`)
  message.channel.send(mencionoembed)
  })
}

}
