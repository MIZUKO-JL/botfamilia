const Discord = require("discord.js");

exports.run = async (client, message, args) => {

 let name = 'Vihtoria'; //Nome

 var avatar = { avatar: 'https://cdn.discordapp.com/avatars/575791804977512451/1184aef502f1727b87d1322e6389433c.png?size=2048' } //Foto

 let texto = [
    'NOVO EVENTO PESSOAL (isso não é minha atividade da escola)',
    'Ai gente sla eu não concordo sabe, não tenho nada  contra e nem nada a favor',
    'mandafotodabunda',
    'GNT EU TO TRISTE, SERIO',
   'Posso te chamar de ventilador?',
   'gnt acho que eu vou morrer',
   'se eu fosse uma barata vc me amaria?',
    'Tudo bem vc é meu fã, eu te desculpo',
    'Bosta de vida caralhenta',
]; //Mensagem que o bot vai mandar

let arg = texto[Math.floor(Math.random() * texto.length)] //Randomizar a mensagem que o bot vai mandar

 message.channel.createWebhook(name, avatar).then(w => { 
 w.send(arg).then((
 ) => w.delete())

 }); //Criação do Webhook
  } 
