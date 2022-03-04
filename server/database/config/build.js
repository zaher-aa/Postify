const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('./connections');

module.exports = () => {
  const query = readFileSync(join(__dirname, 'dbBuild', 'init.sql')).toString()
              + readFileSync(join(__dirname, 'dbBuild', 'fakeData.sql')).toString();

  return connection.query(query);
};
