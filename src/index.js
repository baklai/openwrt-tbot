/*
 * OpenWrt Telegram Bot
 * Copyright(c) 2020 Dmitrii Baklai
 * MIT Licensed
 */

const { bot } = require('./lib/telegram-bot');

// List of the bot's commands
const { main, method } = require('./lib/commands');

const { TELEGRAM_ID } = process.env;

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

const INIT_BOT = new Date().valueOf();

bot.on('message', (msg) => {
  console.log(msg);
  bot.sendMessage(msg.chat.id, 'Privet');
});

// Actions list for action
const { Start, Help } = require('./lib/action.js');

// List of the bot's default message
const { htmlStatusBot403 } = require('./lib/html-message');

const { dateToString } = require('./utils');

bot.onText(/\/start/, function (msg) {
  msg.from.id == TELEGRAM_ID ? Start(bot, msg) : htmlStatusBot403(bot, msg);
});

bot.onText(/\/help/, function (msg) {
  msg.from.id == TELEGRAM_ID ? Help(bot, msg) : htmlStatusBot403(bot, msg);
});

bot.onText(/\/status/, function (msg) {
  if (msg.from.id == TELEGRAM_ID) {
    const html = `
    <b>Привет <i>${msg.from.first_name}</i></b>!\n
    <b>Статус утсройства:</b>
    Доступность устройства: устройство в сети!
    Бот проинициализирован: ${dateToString(INIT_BOT)}
    `;
    bot
      .sendMessage(msg.chat.id, html, {
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.response.body);
      });
  } else {
    htmlStatusBot403(bot, msg);
  }
});

bot.onText(/\/network/, function (msg) {
  if (msg.from.id == TELEGRAM_ID) {
    const html = `
    <b>Привет <i>${msg.from.first_name}</i></b>!\n
  
    `;
    bot
      .sendMessage(msg.chat.id, html, {
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.response.body);
      });
  } else {
    htmlStatusBot403(bot, msg);
  }
});
