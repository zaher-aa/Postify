require('dotenv').config();
const { Pool } = require('pg');

const {
  NODE_ENV, DEV_DB_URL, TEST_DB_URL, DATABASE_URL,
} = process.env;

let DB_URL = '';

switch (NODE_ENV) {
  case 'development':
    DB_URL = DEV_DB_URL;
    break;
  case 'test':
    DB_URL = TEST_DB_URL;
    break;
  case 'production':
    DB_URL = DATABASE_URL;
    break;
  default:
    throw new Error('No DATABASE Found!');
}

module.exports = new Pool({
  connectionString: DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
