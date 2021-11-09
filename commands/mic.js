const Discord = require("discord.js");

exports.run = async (client, message, args) => {

 let name = 'Mickey'; //Nome

 var avatar = { avatar: 'https://cdn.discordapp.com/avatars/668577919152554016/0332a1d7a29b828a14dfda94f44c44a0.png?size=2048' } //Foto

 let texto = [
    'ja compri meu castigo',
    'é,mas você não tem provas!',
    'não sou como terremoto, mas faço suas pernas tremerem',
    'Pra onde mando meu currículo pra trabalhar nesse corpo',
   'Não tenho dinheiro muito menos fama, maz eu queria vc aqui na minha cama',
    'Se que tanto assim presente na Páscoa te dlu meu ovo bb :3',
   'mal apareço. "culpa do mic"',
]; //Mensagem que o bot vai mandar

let arg = texto[Math.floor(Math.random() * texto.length)] //Randomizar a mensagem que o bot vai mandar

 message.channel.createWebhook(name, avatar).then(w => { 
 w.send(arg).then((
 ) => w.delete())

 }); //Criação do Webhook
  } 
