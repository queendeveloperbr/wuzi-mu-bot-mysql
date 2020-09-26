const discord = require("discord.js");
const {MessageEmbed} = require('discord.js')
module.exports.run = async (client, message, args) => {

    const embed = new MessageEmbed()
    client.connection.query(`SELECT prefix FROM guild WHERE id = ${message.guild.id}`, async (er, row) => {
    let prefix = row[0]
    .setDescription(`Use **${prefix}clear [N de linhas]** para limpar!`)
    })
    if(!args[0]) return message.channel.send(embed);


    const embed1 = new MessageEmbed()
    .setDescription('Foram excluidas `' + args[0] + '` mensagens pelo usuario: ' + `${message.member}`)

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
    message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(embed1).then(msg => msg.delete(5000));
    });
}

module.exports.cmd = {
  name: "clear",
  aliases: ['limpar', 'cc', 'clearchat', 'purge'],
  usage: "clear [N de Linhas]"
};
