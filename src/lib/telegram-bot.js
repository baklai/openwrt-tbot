/*
 * Telegram Bot
 */

// Permanent fix : 319
process.env.NTBA_FIX_319 = 1;

// Telegram Modules
const TelegramBot = require('node-telegram-bot-api');

// Application config
const { TELEGRAM_TOKEN, PROXY } = process.env;

const { main, method } = require('./commands');

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(TELEGRAM_TOKEN, {
  filepath: false,
  polling: {
    interval: 300,
    autoStart: true,
    params: { timeout: 10 }
  },
  request: {
    proxy: PROXY ? PROXY : null
  }
});

// Create the list of the bot's commands
bot
  .setMyCommands([...main.commands, ...method.commands], {})
  .then(function (msg) {
    console.log('Telegram Bot is running...');
  })
  .catch((err) => {
    console.log(err.code);
    console.log(err.response);
  });

// Polling error
bot.on('polling_error', function (err) {
  console.log(err.code);
});

module.exports = { bot };
