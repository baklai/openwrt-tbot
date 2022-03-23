const emoji = require('node-emoji').emoji;

const cmd = require('./commands');

const Start = (bot, msg) => {
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
};

const Help = (bot, msg) => {
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
};

module.exports = { Start, Help };
