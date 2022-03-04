const { addCommentQuery } = require('../../database/queries');

module.exports = (req, res) => {
  const { value, post_id: postId, user_id: userId } = req.body;

  addCommentQuery({ value, postId, userId })
    .then((data) => res.status(201).json(data.rows))
    .catch(() => res.status(500).json({ message: 'server error' }));
};
