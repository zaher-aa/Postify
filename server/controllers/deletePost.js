const { deletePostQuery } = require('../database/queries');

const deletePost = (req, res) => {
  const { id } = req.body;

  deletePostQuery(id)
    .then((data) => res.json(data))
    .catch(() => res.status(500).json({ error: 'Internal Server Error' }));
};

module.exports = deletePost;
