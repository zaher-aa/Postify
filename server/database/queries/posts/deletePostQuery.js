const dbConnection = require('../../config/connections');

module.exports = (postId) => {
  const query = {
    text: 'DELETE FROM posts WHERE id = $1',
    values: [postId],
  };

  return dbConnection.query(query);
};
