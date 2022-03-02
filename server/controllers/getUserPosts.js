const { getUserPostsQuery } = require('../database/queries');

const getUserPosts = (req, res) => {
  const { id: userId } = req.params;

  getUserPostsQuery(userId)
    .then((data) => {
      res.json(data.rows);
    })
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
};

module.exports = getUserPosts;
