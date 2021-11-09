const Discord = require("discord.js")
module.exports = {

  run: async (client, message) => {

let respostas = [

  'vai tomar no seu cu, teste um,'
]

const BallNum = Math.floor(Math.random() * respostas.length); 

message.channel.send(respostas[BallNum]);

}}
//Por: HilckiasMarq#1738
