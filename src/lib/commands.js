/**
 * List of the bot commands
 */

const main = {
  description: 'Основные комманды',
  commands: [
    { command: 'start', description: 'запуск бота' },
    { command: 'help', description: 'справка по работе с ботом' }
  ]
};

const method = {
  description: 'Функциональные комманды',
  commands: [
    { command: 'status', description: 'статус устройства' },
    { command: 'network', description: 'конфигурации сети' }
  ]
};

module.exports = { main, method };
