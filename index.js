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

// Init Telegram Bot
require('./src');
