const fs = require('fs');//ArviS#0011
const { Client, Collection, Intents } = require('discord.js');
const chalk = require('chalk')//ArviS#0011
const config = require('./config.json');//ArviS#0011
//ArviS#0011
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS],
});
//ArviS#0011
const Discord = require('discord.js');//ArviS#0011
client.discord = Discord;//ArviS#0011
client.config = config;//ArviS#0011
//ArviS#0011
client.commands = new Collection();//ArviS#0011
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command, command);
};
// ArviS#0011
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));// ArviS#0011
// ArviS#0011
for (const file of eventFiles) {// ArviS#0011
  const event = require(`./events/${file}`);// ArviS#0011
    client.on(event.name, (...args) => event.execute(...args, client));// ArviS#0011
};// ArviS#0011
// ArviS#0011
client.on('interactionCreate', async interaction => {//  ArviS#0011
  if (!interaction.isCommand()) return;//  ArviS#0011
//  ArviS#0011
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
//  ArviS#0011
  try {
    await command.execute(interaction, client, config);
  } catch (error) {// ArviS#0011
    console.error(error);// ArviS#0011
    return interaction.reply({//  ArviS#0011
      content: '[HATA] Komutlar Yüklenirken Hata Oluştu',//  ArviS#0011
      ephemeral: true//  ArviS#0011
    });
  };//  ArviS#0011
});

client.login(require('./config.json').token);//  ArviS#0011










//  ArviS#0011