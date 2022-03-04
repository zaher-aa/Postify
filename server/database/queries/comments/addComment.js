const dbConnection = require('../../config/connections');

module.exports = ({ value, postId, userId }) => dbConnection.query({
  text: 'INSERT INTO comments (content, user_id, post_id) VALUES ($1, $2, $3) RETURNING *',
  values: [value, userId, postId],
});
