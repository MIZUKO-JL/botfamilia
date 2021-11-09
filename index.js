const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Novo ping em: ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); 

const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
      `Nunca diga pra vih que você odeia baratas...`,
      `por favor façam a Aninha entender q billie eilish é ruim`,
      `${client.guilds.cache.size} servidores!`,
      `apersar de ser muito parecido, o Mic não é um rato.`,
      `quem fazer as atividades da vih ganhará um grande premio...`,
      `${client.channels.cache.size} canais!`,
      `A Aninha não é tão santa como dizem...`,
      `${client.users.cache.size} usuários!`,
      `O Mic passa 8 horas dormindo, o resto das horas ele passa no castigo`,
      `esperando a lilly dizer algo que não tenha um palavrão no meio...`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
  client.user
      .setStatus("dnd")
      .catch(console.error);
console.log("Estou Online!")
}); 

client.login(process.env.TOKEN); 

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});