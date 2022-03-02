const { getUserInfo } = require('../database/queries');

const handleUserInfo = (req, res) => {
  const { id: userId } = req.params;

  getUserInfo(userId)
    .then((data) => res.json({
      id: data.rows[0].id, username: data.rows[0].username, email: data.rows[0].email,
    }))
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
};

module.exports = handleUserInfo;
