const Discord = require("discord.js");

exports.run = async (client, message, args) => {
	
const pessoa = message.mentions.users.first() || message.author
const icone = pessoa.avatarURL({ format: 'png', dynamic: true, size: 1024})
const embed = new Discord.MessageEmbed()
.setAuthor(`Avatar de ${pessoa.username}`)
.setDescription(`Clique [aqui](${pessoa.avatarURL()})`)
.setColor('#ff0000')
.setImage(icone)
message.channel.send(embed)
	
}
module.exports.cmd = {
	name: "avatar",
	aliases: ['imagem'],
	category: "none",
    desc: "none",
	usage: "avatar [pessoa]"
  };