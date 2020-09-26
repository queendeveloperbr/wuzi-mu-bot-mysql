const Discord = require("discord.js");

exports.run = async (client, message, args) => {

                //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
    
    let obj = args.join(' ');
    client.user.setPresence({ activity: { name: `${obj}` }});
    console.log(`Presença Alterada para ${obj}`);

    let msg = new Discord.MessageEmbed()
    .setColor(`CYAN`)
    .setDescription(`> Presença alterada para: ${obj} pelo modo: Jogando!`)
    message.channel.send(msg)

	
}
module.exports.cmd = {
	name: "setpresence",
	aliases: ['setp'],
	category: "none",
    desc: "none",
	usage: "setp -<o/j/s> [presence]"
  };