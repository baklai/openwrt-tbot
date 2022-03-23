const htmlStatusBot403 = (bot, msg) => {
  const { id } = msg.chat;
  const html = `Привет, <b>${msg.from.first_name}</b>.
  Спасибо что зашел, но это <b>приватный</b> чат бот!
  Если тебе <b>нужен бот</b> пиши мне <b>@baklai</b>\n\n
  Мой GitHub профиль:
  https://github.com/baklai
  `;
  bot.sendMessage(id, html, { parse_mode: 'HTML' }).catch((err) => {
    console.log(err.code);
    console.log(err.response.body);
  });
};

module.exports = {
  htmlStatusBot403
};
