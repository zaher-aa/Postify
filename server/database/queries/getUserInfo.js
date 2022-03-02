const dbConnection = require('../config/connections');

const getUserInfo = (userId) => {
  const query = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [userId],
  };

  return dbConnection.query(query);
};

module.exports = getUserInfo;
