const fs = require('fs');//ArviS#0011
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId } = require('./config.json');//ArviS#0011
const t = require('./config.json');
//ArviS#0011
const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//ArviS#0011

const rest = new REST({// ArviS#0011
  version: '9'
}).setToken(t.token);// ArviS#0011
// ArviS#0011
rest.put(Routes.applicationCommands(clientId), {// ArviS#0011
    body: commands
  })//  ArviS#0011
//  ArviS#0011
  .then(() => console.log('[KOMUTLAR] Aktif'))//  ArviS#0011
  .catch(console.error);//  ArviS#0011
  //  ArviS#0011
  //  ArviS#0011










  //  ArviS#0011