const { addPost } = require('../../database/queries');

module.exports = (req, res) => {
  const {
    username, content, url: imgUrl, id: userId,
  } = req.body;

  addPost({
    username, content, imgUrl, userId,
  })
    .then((data) => res.status(201).json(data.rows))
    .catch(() => res.status(500).json({ message: 'server error' }));
};
