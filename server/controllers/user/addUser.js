const { createUser } = require('../../database/queries');

module.exports = (req, res) => {
  const { username, email, password } = req.body;

  createUser({ username, email, password })
    .then((data) => {
      res.status(201).json({
        username: data.rows[0].username, email: data.rows[0].email, id: data.rows[0].id,
      });
    })
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
};
