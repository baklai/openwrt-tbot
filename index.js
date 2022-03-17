/*
 * OpenWrt Telegram Bot
 * Copyright(c) 2022 Dmitrii Baklai
 * MIT Licensed
 */

const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '.env') });

if (dotenv.error) {
  console.error(dotenv.error);
  process.exit(1);
}

const { TELEGRAM_ID } = process.env;

// Telegram Bot
const { TBOT } = require('./src');

const { dateToString } = require('./src/utils');

const { htmlStatusBot403 } = require('./src/lib/html-message');

TBOT.onText(/\/status/, function (msg) {
  if (msg.from.id == TELEGRAM_ID) {
    const html = `
    Статистика приложения:\n 
    <b>Бот проинициализирован:</b> ${dateToString(app.dateInitApp)}
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
    htmlStatusBot403(TBOT, msg);
  }
});
