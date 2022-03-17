/*
 * Telegram Bot
 * Copyright(c) 2020 Dmitrii Baklai
 * ISC Licensed
 */

/*
 *  Permanent fix :
 *  https://github.com/yagop/node-telegram-bot-api/issues/319
 */
process.env.NTBA_FIX_319 = 1;

// Application config
const { TELEGRAM_ID, TELEGRAM_TOKEN } = process.env;

// Telegram Modules
const TelegramBot = require('node-telegram-bot-api');

// Create a bot that uses 'polling' to fetch new updates
const TBOT = new TelegramBot(TELEGRAM_TOKEN, {
  filepath: false,
  polling: {
    interval: 300,
    autoStart: true,
    params: { timeout: 10 }
  }
});

// Polling error
TBOT.on('polling_error', function (err) {
  console.log(err.code);
});

// List of the bot's commands
const cmd = require('./lib/commands');

// Actions list for action
const { Start, Help, About, Donate } = require('./lib/action.js');

// List of the bot's default message
const { htmlStatusBot403 } = require('./lib/html-message');

// Create the list of the bot's commands
TBOT.setMyCommands([...cmd.main.commands, ...cmd.method.commands], {})
  .then(function (msg) {
    console.log('Telegram Bot is running...');
  })
  .catch((err) => {
    console.log(err.code);
    console.log(err.response);
  });

TBOT.onText(/\/start/, function (msg) {
  msg.from.id == TELEGRAM_ID ? Start(TBOT, msg) : htmlStatusBot403(TBOT, msg);
});

TBOT.onText(/\/help/, function (msg) {
  msg.from.id == TELEGRAM_ID ? Help(TBOT, msg) : htmlStatusBot403(TBOT, msg);
});

TBOT.onText(/\/about/, function (msg) {
  msg.from.id == TELEGRAM_ID ? About(TBOT, msg) : htmlStatusBot403(TBOT, msg);
});

TBOT.onText(/\/donate/, function (msg) {
  msg.from.id == TELEGRAM_ID ? Donate(TBOT, msg) : htmlStatusBot403(TBOT, msg);
});

module.exports = { TBOT };
