const dbConnection = require('../config/connections');

const checkUserQuery = (email, password) => {
  const query = {
    text: 'SELECT * FROM users WHERE email = $1 AND password = $2',
    values: [email, password],
  };

  return dbConnection.query(query);
};

module.exports = checkUserQuery;
