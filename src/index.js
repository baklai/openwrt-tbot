/*
 * OpenWrt Telegram Bot
 * Copyright(c) 2020 Dmitrii Baklai
 * MIT Licensed
 */
const { bot } = require('./lib/telegram-bot');

const emoji = require('node-emoji').emoji;

const { TELEGRAM_ID } = process.env;

const INIT_BOT = new Date().valueOf();

// List of the bot's default message
const status403 = (msg) => {
  return `Привет, <b>${msg.from.first_name}</b>.
  Спасибо что зашел, но это <b>приватный</b> чат бот!
  Если тебе <b>нужен бот</b> пиши мне <b>@baklai</b>\n\n
  Мой GitHub профиль:
  https://github.com/baklai
  `;
};

const { dateToString } = require('./utils');

bot.onText(/\/start/, function (msg) {
  if (msg.from.id == TELEGRAM_ID) {
    const { id } = msg.chat;
    const html = `
  <b>Привет <i>${msg.from.first_name}</i></b>!
  <i>Я могу помочь тебе в использовании <b>OpenWrt</b>.</i>\n
  <b>Список быстрых ссылок:</b>
  <b>&#187;</b> /help - справка по коммандам
  <b>&#187;</b> /status - статус устройства\n
  <b>Мой GitHub профиль:</b>
  https://github.com/baklai
  `;
    bot
      .sendMessage(id, html, {
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.response.body);
      });
  } else {
    bot.sendMessage(id, status403(msg), { parse_mode: 'HTML' }).catch((err) => {
      console.log(err.code);
      console.log(err.response.body);
    });
  }
});

bot.onText(/\/help/, function (msg) {
  if (msg.from.id == TELEGRAM_ID) {
    const { id } = msg.chat;
    const html = `<b>Привет <i>${msg.from.first_name}</i></b>!`;
    let command = `\nТы можешь управлять мной, <b>отправляя эти команды</b>:\n`;
    command += `\n<b>${cmd.main.description}:</b>`;
    cmd.main.commands.forEach(function (item) {
      command += `\n/${item.command} - ${item.description}`;
    });
    command += `\n\n<b>${cmd.method.description}:</b>`;
    cmd.method.commands.forEach(function (item) {
      command += `\n/${item.command} - ${item.description}`;
    });
    bot.sendMessage(id, html + command, { parse_mode: 'HTML' }).catch((err) => {
      console.log(err.code);
      console.log(err.response.body);
    });
  } else {
    bot.sendMessage(id, status403(msg), { parse_mode: 'HTML' }).catch((err) => {
      console.log(err.code);
      console.log(err.response.body);
    });
  }
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
    bot.sendMessage(id, status403(msg), { parse_mode: 'HTML' }).catch((err) => {
      console.log(err.code);
      console.log(err.response.body);
    });
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
    bot.sendMessage(id, status403(msg), { parse_mode: 'HTML' }).catch((err) => {
      console.log(err.code);
      console.log(err.response.body);
    });
  }
});
