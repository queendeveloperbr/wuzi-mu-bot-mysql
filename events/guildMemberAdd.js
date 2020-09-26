const
    { MessageEmbed, Collection, Client } = require('discord.js'), fs = require('fs'), db = require('mysql'), config = require('../assests/config.json')
    let Discord = require('discord.js')
module.exports = (client, member) => {
    console.log(`Novo Membro Registrado, ID: ${member.id}`)

    try {
     client.connection.query(`
            INSERT INTO eco (id,money,xp,lvl)
            VALUES (${member.id},0,0,0)`
        );
    } catch (e) {
        console.log(e)
    }


    /* client.connection.query(`SELECT * FROM guild WHERE id = ${message.guild.id}`, async (er, row) => {
        let welcomechannel = row[0].welcomechannel

        if(welcomechannel == 0) return;
        if(!welcomechannel == 0) {
            let embed = new MessageEmbed()
            .setDescription(`O Membro ${member.username} entrou no servidor! Dê os parabéns á ele!`)
            .setColor('CYAN')
            welcomechannel.send(embed)
        }
        
    })*/
}
