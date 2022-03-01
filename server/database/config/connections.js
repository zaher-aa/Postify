require('env2')('config.env');
const { Pool } = require('pg');

const { NODE_ENV } = process.env;

let DATABASE_URL = '';

switch (NODE_ENV) {
  case 'test':
    DATABASE_URL = process.env.TEST_DB_URL;
    break;
  case 'development':
    DATABASE_URL = process.env.DB_URL;
    break;
  default:
    throw new Error('No database url found');
}

const options = {
  connectionString: DATABASE_URL,
  ssl: false,
};

const dbConnection = new Pool(options);

module.exports = dbConnection;
