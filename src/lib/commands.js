/**
 * Telegram Bot
 * List of the bot's commands
 */

module.exports = {
  main: {
    description: 'Основные комманды',
    commands: [
      { command: 'start', description: 'запуск бота' },
      { command: 'help', description: 'справка по работе с ботом' }
    ]
  },
  method: {
    description: 'Функциональные комманды',
    commands: [{ command: 'status', description: 'статус устройства' }]
  }
};
