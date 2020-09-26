const
    { MessageEmbed, Collection, Client } = require('discord.js'), fs = require('fs'), db = require('mysql'), config = require('../assests/config.json')
    let Discord = require('discord.js')
module.exports = (client) => {
  console.log(`---------WuZi Mu Iniciando---------
    Preparando Banco de dados...
    Iniciando Comandos...
  `)
  client.user.setPresence({ activity: { name: `@WuZi Mu para receber ajuda!` }})
  // Sistema para captar os Servidores

   client.guilds.cache.keyArray().forEach(id1 => {

     client.connection.query(`SELECT * FROM guild WHERE id = ${id1}`, async (er, row) => {
      if(!row[0]) {
    client.connection.query(`INSERT INTO guild(prefix,lang,id,welcomechannel,logschannel,counterchannel) VALUES ('+','br',${id1},0,0,0)`)
    }
    })
  })
    // Sistema para captar os Usuarios

    client.users.cache.keyArray().forEach(id1 => {

      client.connection.query(`SELECT * FROM eco WHERE id = ${id1}`, async (er, row) => {
       if(!row[0]) {
        client.connection.query(`INSERT INTO eco(id,money,xp,lvl) VALUES (${id1},0,0,0)`)
     }
     })
   })
}
