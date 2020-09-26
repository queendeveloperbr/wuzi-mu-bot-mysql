const
    { MessageEmbed, Collection, Client } = require('discord.js'), fs = require('fs'), db = require('mysql'), config = require('./assests/config.json'),
    client = new Client({ autoReconnect: true, disableEveryone: true }),
    connection = db.createConnection({ host: config.host, user: config.user, password: config.password, database: config.database })
    connection.connect();
    client.commands = new Collection();
    client.aliases = new Collection();
    client.connection = connection;


const evtFiles = fs.readdirSync('./events/')
console.log(` ${evtFiles.length} Eventos Carregados`)
evtFiles.forEach(f => {
const eventName = f.split('.')[0]
const event = require(`./events/${f}`)  
client.on(eventName, event.bind(null, client))
})  

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Não foi encontrado comandos!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.cmd.name, pull);  
        pull.cmd.aliases.forEach(alias => {
            client.aliases.set(alias, pull.cmd.name)
        });
    });
});

client.login(config.token)
