/**
 * Lists of the bot commands
 */

const main = {
  description: 'Основные комманды',
  commands: [
    { command: 'start', description: 'старт' },
    { command: 'about', description: 'о боте' },
    { command: 'help', description: 'справка' }
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
