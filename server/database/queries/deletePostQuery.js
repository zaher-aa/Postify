const dbConnection = require('../config/connections');

const deletePostQuery = (postId) => {
  const query = {
    text: 'DELETE FROM posts WHERE id = $1',
    values: [postId],
  };

  return dbConnection.query(query);
};

module.exports = deletePostQuery;
