const {
    SlashCommandBuilder
  } = require('@discordjs/builders');//ArviS#0011
  //ArviS#0011
  module.exports = {//ArviS#0011
    data: new SlashCommandBuilder()//ArviS#0011
      .setName('arviss')//  ArviS#0011
      .setDescription('ArviS#0011'),//  ArviS#0011
    async execute(interaction, client) {//  ArviS#0011
      const embed = new client.discord.MessageEmbed()//  ArviS#0011
        .setColor('#2f3136')//  ArviS#0011
        .setDescription('Made by ❤️ ArviS#0011 \n\n[`Discord`](https://discord.gg/3AfAFE5qYg)')//  ArviS#0011
        .setFooter(client.user.tag, client.user.avatarURL());//     ArviS#0011
      await interaction.reply({//     ArviS#0011
        embeds: [embed]
      });//     ArviS#0011
    },
  };//     ArviS#0011
















  //     ArviS#0011