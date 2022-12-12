const chalk = require('chalk');
//ArviS#0011
module.exports = {//ArviS#0011
  name: 'ready',//ArviS#0011
  execute(client) {//ArviS#0011
    client.user.setActivity("Made by ❤️ ArviS#0011")//ArviS#0011
    const arvis0011 = client.channels.cache.get(client.config.DestekKanalı)//ArviS#0011
// ArviS#0011
    function sendTicketMSG() {// ArviS#0011
      const embed = new client.discord.MessageEmbed()// ArviS#0011
        .setColor('#2f3136')// ArviS#0011
        .setImage("https://media.discordapp.net/attachments/997105193256747028/1051895712792711178/image.png")
        .setAuthor('ArviS#0011 | V13 Advanced Ticket System', client.user.avatarURL())
        .setDescription('Aşağıdaki Butonu Kullanarak Destek Talebi Oluşturabilirsin')//  ArviS#0011
        .setFooter(`Made by ❤️ ArviS#0011`)// ArviS#0011

// ArviS#0011
      const row = new client.discord.MessageActionRow()
        .addComponents(//  ArviS#0011
          new client.discord.MessageButton()//  ArviS#0011
          .setCustomId('destek-aç')//  ArviS#0011
          .setLabel('Destek Talebi Oluştur')//  ArviS#0011
          .setEmoji('<a:4boyutdonensiyahkalp_arvis0011:1051894482381062164>')
          .setStyle('SUCCESS'),);
//  ArviS#0011
      arvis0011.send({
        embeds: [embed],//   ArviS#0011
        components: [row]})}//   ArviS#0011
    arvis0011.bulkDelete(100).then(() => {//   ArviS#0011
      sendTicketMSG()
//   ArviS#0011
      console.log(chalk.green('[BOT] ') + chalk.cyan('Embed Mesajı, Belirtilen Kanala Gönderildi'))})},};//   ArviS#0011
      //   ArviS#0011












      //   ArviS#0011