const dbConnection = require('../../config/connections');

module.exports = ({
  username, content, imgUrl, userId,
}) => dbConnection.query({
  text: 'INSERT INTO posts (title,content,likes, comments,image_url,user_id) VALUES ($1 ,$2 ,$3 ,$4, $5, $6) RETURNING *',
  values: [username, content, 0, 0, imgUrl, userId],
});
