const
    { MessageEmbed, Collection, Client } = require('discord.js'), fs = require('fs'), db = require('mysql'), config = require('../assests/config.json')
    let Discord = require('discord.js')
module.exports = (client, member) => {
    console.log(`Novo Membro Deletado, ID: ${member.id}`)

    try {
     client.connection.query(`
            DELETE FROM eco
            WHERE id = '${member.id}'`
        );
    } catch (e) {
        console.log(e)
    }
}
