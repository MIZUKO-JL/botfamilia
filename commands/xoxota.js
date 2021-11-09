const Discord = new require('discord.js')

module.exports.run = async (client, message, args) => {
  const texto = args.join('');
 

message.channel.send(texto);
                            };