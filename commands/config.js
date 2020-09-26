const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const
  config = require('../assests/config.json'),
  db = require('mysql')
module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("VIEW_AUDIT_LOG")) {
    message.reply('Você não tem permissão  para usar esse comando!'); 
    return;
   }
   await client.connection.query(`SELECT * FROM guild WHERE id = ${message.guild.id}`, async (er, row) => {
    let prefix = row[0].prefix
    let lang = row[0].lang
    let welcomeid = row[0].welcomechannel
    let logsid = row[0].logschannel
    let counterid = row[0].counterchannel

      const embed = new MessageEmbed()
      .addField(`<:terminal:708794907208187904> Prefixo:`, '`' + `[${prefix}prefix <prefixo>] ` + '`' +  `Atual: **${prefix}**`, false)
      if(logsid == 0) { // Logs Channel
        embed.addField(`<:desatived:708773188611604582>  Canal Para Logs:`, '`' + `[${prefix}config logs <id>] ` + '`', false)
      }else {
        embed.addField(`<:atived:708772992523436162> Canal Para Logs:`, '`' + `[${prefix}config remove-logs] ` + '`' + ` » <#${logsid}>`, false)
      }
      if(welcomeid == 0) { // Welcome Channel
        embed.addField(`<:desatived:708773188611604582> Bem-Vindo Logs:`, '`' + `[${prefix}config welcome <id>] ` + '`', false)
      }else {
        embed.addField(`<:atived:708772992523436162> Bem-Vindo Logs:`, '`' + `[${prefix}config remove-welcome <id>] ` + '`' + `» <#${welcomeid}>`, false)
      }
      if(counterid == 0) { // Counter Channel
        embed.addField(`<:desatived:708773188611604582> Contador Logs:`, '`' + `[${prefix}config contador <id>] ` + '`', false)
      }else {
        embed.addField(`<:atived:708772992523436162> Contador Logs:`, '`' + `[${prefix}remove-contador <id>] ` + '`' + `» <#${counterid}>`, false)
      }
      embed.addField(`🌐 Idioma:`, '`' + `[${prefix}lang <idioma>] ` + '`' +  `Atual: **${lang}**`, false)

      message.channel.send(embed)
  })
}

module.exports.cmd = {
  name: "config",
  aliases: ['configuração', 'settings', 'manager', 'c'],
  usage: "config"
};
