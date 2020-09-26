const
    { MessageEmbed, Collection, Client } = require('discord.js'), fs = require('fs'), db = require('mysql'), config = require('../assests/config.json')
    let Discord = require('discord.js')
module.exports = (client, guild) => {
    console.log(`Nova Guild Deletada: ${guild.name}`)

    try {
     client.connection.query(`
            DELETE FROM guild
            WHERE id = '${guild.id}'`
        );
    } catch (e) {
        console.log(e)
    }
}
