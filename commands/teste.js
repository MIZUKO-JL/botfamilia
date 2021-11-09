//coloque na index: const junior_reply = require("discord-reply")
const Discord = require("discord.js")

module.exports ={
  name:'embed',
  description:'embed uai ',
      run: async(client, message, args) => {
        let junior_author = `ajuda`;
        let junior_desc = `⚙️comandos principais!`;
        let junior_field = `comandos cu e buceta`;
        let junior_footer = `para utilizar basta usar o prefix "."`;
        
        let junior_color = "#000080";
        let junior_thumb = `https://media.discordapp.net/attachments/886396916588478527/888109719267442739/Screenshot_8.png`;
       // let junior_image = `https://media.discordapp.net/attachments/886396916588478527/888109719267442739/Screenshot_8.png`;

        let junior_embed = new Discord.MessageEmbed()
       // .setAuthor(junior_author)
        .setDescription(`Veja meus comandos:

\n 👥social \n 💵economia \n 😂Diversão
⠀`)
        .setTitle(junior_desc)
       // .addField(`${junior_field}`)
        .setColor(junior_color)
        .setFooter(junior_footer)
        .setThumbnail(junior_thumb)
        //.setImage(junior_image)

        message.lineReply(junior_embed)
              }
} 
