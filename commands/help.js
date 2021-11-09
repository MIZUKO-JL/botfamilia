const Discord = require("discord.js");

module.exports = {
    name: "help com reação by ferinha",
    description: "clique na reação, e a msg será editada :)",
    author: "ferinha heher",

run: async(client, message, args) => { //embed do painel inicial
    let embed = new Discord.MessageEmbed()
    .setTitle(`Painel de comandos`)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`Veja meus comandos:

\n1️⃣ diversao \n2️⃣ economia \n3️⃣ social \n Outros
⠀`)
    .setFooter(`${message.author.tag}`)
    .setColor("YELLOW")    
    message.channel.send(`${message.author}`, embed).then(msg => {
      msg.react("1️⃣")
      msg.react("2️⃣")
      msg.react("3️⃣")
     // msg.react("🤣")
     // msg.react("👑")

      let filtro0 = (r, u) => r.emoji.name === '1️⃣' && u.id === message.author.id;
      let filtro1 = (r, u) => r.emoji.name === '2️⃣' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === '3️⃣' && u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === '🤣' && u.id === message.author.id;
      let filtro4 = (r, u) => r.emoji.name === '👑' && u.id === message.author.id;
      

      let coletor0 = msg.createReactionCollector(filtro0);
      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);
      let coletor4 = msg.createReactionCollector(filtro4);

      coletor0.on("collect", c => { //embed do painel inicial (editada)

        let ferinha = new Discord.MessageEmbed()
      .setTitle(`diversão🤣`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`use os comandos com o prefixo:".":

\n***hug*** \n***tapa*** \n***abraço*** \n***beijo***\n***rasengan*** \n***dançar*** \n***filizanivserario***
\n *AÇOES*\n\n***vih***\n***mic***\n***ani***\n***cranio***

⠀`)
      .setFooter(`${message.author.tag}`)
      .setColor("YELLOW")   
        
     
        msg.edit(`${message.author}`, ferinha)
      })


      coletor.on("collect", c => { //embed do painel de utilidade (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`🔗 Utilidade 🔗`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`Escreva seus comandos de utilidade aqui! \n⠀`)
        .setColor("GREEN")
        

        msg.edit(`${message.author}`, fera)
      })

      coletor2.on("collect", c => { //embed do painel de moderação (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`⚙ Moderação ⚙`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`use os comandos com o prefixo:"."! \n⠀`)
        .setColor("GREEN")
        

        msg.edit(`${message.author}`, fera)
      })

      coletor3.on("collect", c => { //embed do painel de diversão (editada)

        let ferinha = new Discord.MessageEmbed()
        .setTitle(` Diversão 🤣`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`use os comandos com o prefixo:"."! \n⠀`)
        .setColor("GREEN")

        msg.edit(`${message.author}`, ferinha)
      })

      coletor4.on("collect", c => { //embed de outros cmds (editada)

        let ferauwu = new Discord.MessageEmbed()
        .setTitle(`👑 Outros 👑`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`Escreva seus outros comandos aqui! \n⠀`)
        .setColor("BLUE")

        msg.edit(`${message.author}`, ferauwu)
      })
    })
  }
}//by ferinha <3
