const Discord = require("discord.js");

exports.run = async (client, message, args) => {

 let name = 'Cranio Gamer'; //Nome

 var avatar = { avatar: 'https://cdn.discordapp.com/avatars/575791804977512451/1184aef502f1727b87d1322e6389433c.png?size=2048' } //Foto

 let texto = [
   'Não sou inteligente',
   'Mds ja disse que não sou inteligente',
]; //Mensagem que o bot vai mandar

let arg = texto[Math.floor(Math.random() * texto.length)] //Randomizar a mensagem que o bot vai mandar

 message.channel.createWebhook(name, avatar).then(w => { 
 w.send(arg).then((
 ) => w.delete())

 }); //Criação do Webhook
  } 
