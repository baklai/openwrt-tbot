const htmlStatusBot403 = (bot, msg) => {
  const { id } = msg.chat;
  const html = `Привет, <b>${msg.from.first_name}</b>.
  Спасибо что зашел, но это <b>приватный</b> чат бот!
  Если тебе <b>нужен свой бот</b> пишите мне <b>@baklai</b>`;
  bot.sendMessage(id, html, { parse_mode: 'HTML' }).catch((err) => {
    console.log(err.code);
    console.log(err.response.body);
  });
};

module.exports = {
  htmlStatusBot403
};
