
        const Discord = require('discord.js');


exports.run = async (client, message, args) => {
        var servers = message.guild.roles
        var num = 0;
        var pagina = 1;
        var totalPages = parseInt(servers.cache.size/10+1);
        
        var embed = new Discord.MessageEmbed()

        .setDescription(`${servers.cache.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\``).slice(0,10).join('\n')}`)
        .setFooter(`Página ${pagina} de ${totalPages} (${client.guilds.cache.size} servidores encontrados.)`, message.author.displayAvatarURL())
        .setAuthor('Todos os cargos!', client.user.displayAvatarURL())
        .setColor('#36393e')
        .setThumbnail(client.user.displayAvatarURL())
        message.channel.send(embed).then(async ser => {

            if(servers.cache.size > 10) {

                await ser.react("⬅");
                await ser.react("➡");
                
                const voltar = ser.createReactionCollector((r, u) => r.emoji.name === "⬅" && u.id === message.author.id, { time: 100000 });
                const proximo = ser.createReactionCollector((r, u) => r.emoji.name === "➡" && u.id === message.author.id, { time: 100000 });
            
                            voltar.on("collect", async r => {
                                if(pagina !== 1) {
                                    num = num-10
                                    num = num.toString().length > 1 ? num-parseInt(num.toString().slice(num.toString().length-1)) : 0
                                    pagina -= 1
                                    var embed = new Discord.MessageEmbed()

                                .addField(`Servidores:`, `${servers.cache.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\``).slice(pagina*10-10,pagina*10).join('\n')}`)
                                .setFooter(`Página ${pagina} de ${totalPages} (${client.guilds.cache.size} servidores encontrados.)`, message.author.displayAvatarURL())
                                .setColor('#36393e')
                                .setAuthor('Todos os cargos!', client.user.displayAvatarURL())
                                .setThumbnail(client.user.displayAvatarURL())
                                ser.edit(embed)
                                    r.remove(r.users.last().id)
                                } else {
                                    pagina = totalPages
                                    num = totalPages*10-20

                                    var embedb = new Discord.MessageEmbed()

                                    .setDescription(`${servers.cache.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\``).slice(totalPages*10-10,pagina*10).join('\n')}`)
                                    .setFooter(`Página ${pagina} de ${totalPages} (${client.guilds.cache.size} servidores encontrados.)`, message.author.displayAvatarURL())
                                    .setThumbnail(client.user.displayAvatarURL())
                                    .setAuthor('Todos os cargos!', client.user.displayAvatarURL())
                                    .setColor('#36393e')
                                ser.edit(embedb)

                                    r.remove(r.users.last().id)
                                }
                            })
            
                            proximo.on("collect", async r => {
                                if(pagina !== totalPages) {
                                    num = num.toString().length > 1 ? num-parseInt(num.toString().slice(num.toString().length-1)) : 0
                                    num = num+10
                                    pagina += 1

                                    var embedc = new Discord.MessageEmbed()

                                    .setDescription(`${servers.cache.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\``).slice(pagina*10-10,pagina*10).join('\n')}`)
                                    .setFooter(`Página ${pagina} de ${totalPages} (${client.guilds.cache.size} servidores encontrados.)`, message.author.displayAvatarURL())
                                    .setThumbnail(client.user.displayAvatarURL)
                                    .setAuthor('Todos os cargos!', client.user.displayAvatarURL())
                                    .setColor('#36393e')
                                ser.edit(embedc)

                                    r.remove(r.users.last().id)
                                } else {
                                    pagina = 1
                                    num = 0

                                    var embedd = new Discord.MessageEmbed()

                                    .setDescription(`${servers.cache.map(se=> `Nome: \`${se.name}\` - ID: \`${se.id}\``).slice(0,pagina*10).join('\n')}`)
                                    .setFooter(`Página ${pagina} de ${totalPages} (${client.guilds.cache.size} servidores encontrados.)`, message.author.displayAvatarURL())
                                    .setThumbnail(client.user.displayAvatarURL())
                                    .setAuthor('Todos os cargos!', client.user.displayAvatarURL())
                                    .setColor('#36393e')
                                    ser.edit(embedd)

                                    r.remove(r.users.last().id)
                    }
                })
            }
        })
    }
    module.exports.cmd = {
        name: "rolesall",
        aliases: ['cargos'],
        usage: "rolesall"
      };
