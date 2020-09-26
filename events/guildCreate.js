const
    { MessageEmbed, Collection, Client } = require('discord.js'), fs = require('fs'), db = require('mysql'), config = require('../assests/config.json')
    let Discord = require('discord.js')
module.exports = (client, guild) => {
    console.log(`Nova Guild Registrada: ${guild.name}`)

    try {
      client.connection.query(`
            INSERT INTO guild (prefix, lang, id, welcomechannel, logschannel, counterchannel)
            VALUES ('+', 'br', '${guild.id}', 0, 0, 0);`
        );
    } catch (e) {
        console.log(e)
    }
}
