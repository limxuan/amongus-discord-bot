const {Collection, Client, Discord, MessageEmbed } = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
const clientserver = client.guilds.cache.get('757357041152163951')
const clientowner = client.users.cache.get('756946472393506916')
client.on('ready', () => {
    client.user.setActivity(`${prefix}help`)
    console.log(`${client.user.username} ✅`)
})
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    const command = client.commands.get(cmd)
    if(!command) command = client.commands.get(bot.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})

client.on('guildMemberAdd', async member => {
    const server = client.guilds.cache.get('757357041152163951')
    if(!member.guild.id === server.id) return;
    const ura = client.users.cache.get('756946472393506916')
    const role = message.guild.roles.cache.get('757555598031061113')
    const newChannel = await server.channels.create(`${member.user.username}-${member.user.id}`, {
        type : 'text',
        parent : '757357041152163952',
        permissionOverwrites : [
            {
                id: server.id,
                deny : [`VIEW_CHANNEL`]
            },
            {
                id : member.id,
                allow : [`VIEW_CHANNEL`, `SEND_MESSAGES`, `ADD_REACTIONS`, `ATTACH_FILES`]
            }
        ]
    }).then(c => {
        c.send(`<@${member.id}>`)
        c.send(new MessageEmbed()
        .setTitle(`Welcome to **${member.guild.name}**`)
        .setDescription(`Please wait shortly before ${ura} arrives.\nPlease send in all of the details of the trade in this channel.\n**NOTE :** This is a private channel which is only viewable to you and ${ura}`)
        .setColor('GREEN')
        )
        member.send(new MessageEmbed().setTitle('Welcome to **-UrA-\'s** epicnpc discord server').setDescription(' A private channel has been created, to acess the channel please click  -> <#' + c.id + `>`))

        client.channels.cache.get('757516975399501924').send(new MessageEmbed()
        .setTitle('New Channel').setColor('GREEN')
        .setDescription(`Tag : \`${member.user.tag}\`\nID : \`${member.user.id}\`\nChannel : <#` + c.id + `>`)
        )
    })
    
})
client.on('guildMemberRemove', async member => {
    const role = message.guild.roles.cache.get('757555598031061113')
    const server = client.guilds.cache.get('757357041152163951')
    if(!member.guild.id === server.id) return;
    const channel2delete = member.guild.channels.cache.find(ch => ch.name === `${member.user.username}-${member.user.id}`)
    await channel2delete.delete()
    client.channels.cache.get('757516975399501924').send(`<@&${role.id}>`)
    client.channels.cache.get('757516975399501924').send(new MessageEmbed()
        .setTitle('Deleted Channel').setColor('RED')
        .setDescription(`Tag : \`${member.user.tag}\`\nID : \`${member.user.id}\``)
        )
 
})
client.login(token)