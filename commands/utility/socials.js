const Discord = require('discord.js');

module.exports = {
    name: 'socials', 
    aliases: ['socials', 's'],
    usage: 'socials',
    description: 'Prints the onwers socials!',
    execute(message, args) {
      return message.channel.send(
        new Discord.MessageEmbed()
         .setTitle('**Socials**')
          .setDescription('Make sure to follow all of these!')
         .setColor('ff0000')
         .addField('**Links**', '[Twitter](https://twitter.com/)\n[Youtube](https://youtube.com/)', false)
      )
  }
}