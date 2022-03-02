const dbConnection = require('../config/connections');

const getUserPostsQuery = (userId) => {
  const query = {
    text: 'SELECT * FROM posts WHERE posts.user_id = $1',
    values: [userId],
  };

  return dbConnection.query(query);
};

module.exports = getUserPostsQuery;
