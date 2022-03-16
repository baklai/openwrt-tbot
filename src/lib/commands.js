/**
 * Telegram Bot
 * List of the bot's commands
 */

module.exports = {
  main: {
    description: 'Основные комманды',
    commands: [
      { command: 'start', description: 'запуск бота' },
      { command: 'help', description: 'справка по работе с ботом' },
      { command: 'about', description: 'о боте и его возможностях' },
      { command: 'donate', description: 'пожертвование на обучение бота' }
    ]
  },
  method: {
    description: 'Функциональные комманды',
    commands: [{ command: 'status', description: 'статус автопарсера' }]
  }
};
