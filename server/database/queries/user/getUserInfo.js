const dbConnection = require('../../config/connections');

module.exports = (userId) => {
  const query = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [userId],
  };

  return dbConnection.query(query);
};
