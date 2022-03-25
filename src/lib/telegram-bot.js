/*
 * Telegram Bot
 */

// Permanent fix :  https://github.com/yagop/node-telegram-bot-api/issues/319
process.env.NTBA_FIX_319 = 1;

// Telegram Modules
const TelegramBot = require('node-telegram-bot-api');

// Application config
const { TELEGRAM_TOKEN, PROXY } = process.env;

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

// Polling error
bot.on('polling_error', function (err) {
  console.log(err.code);
});

module.exports = { bot };
