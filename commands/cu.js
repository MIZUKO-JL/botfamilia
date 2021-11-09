

const db = require("quick.db")
const Discord = require("discord.js")


module.exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || message.author; // isso pega o nome da pessoa mencionada, mas caso vocÊ não mncione alguem, ele pega o nome de quem usou o comando

let moedas = await db.fetch(`atm_${user.id}`) // Puxando um lugar na database (ou quase isso...)
if(moedas == null) moedas = 0; //isso faz com que toda vez que o valor de moedas não existir(null) fique em 0

const x_vidros = new Discord.MessageEmbed()
//.setColor("RED") // caso vc seja iniciante no js/d.js, para mudar a cor da embed é só colocar uma codigo de cor hex ali. Pesquise no goolgle: cor hex e pegue o codigo.
.setDescription(`[\`${moedas}\`] Coins`) // fique avontade para mudar essa descrição

message.channel.send(x_vidros) // caso esteja na v12.Se estiver na v13 pode aagar essa linha 
//message.channel.send({embeds: [x_vidros]}) //caso esteja na v13. Se tiver na v12, pode excluir essa linha



// crido pelo canal: JeffinBR



}
module.exports.help = {
name: "moedas",
aliases: ["atm","bal"]
}