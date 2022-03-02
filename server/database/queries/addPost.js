const dbConnection = require('../config/connections');

const addPostTodata = (body) => {
  console.log(body.id);
  return dbConnection.query({
    text: 'INSERT INTO posts (title,content,likes, comments,image_url,user_id) VALUES ($1,$2,$3,$4, $5, $6) RETURNING *',
    values: [body.username, body.content, 0, 0, body.url, body.id],
  });
};
module.exports = addPostTodata;
