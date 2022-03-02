const createUser = require('../database/queries/createUser');

const addUser = (req, res) => {
  const { username, email, password } = req.body;
  createUser(username, email, password)
    .then((data) => {
      res.json({ username: data.rows[0].username, email: data.rows[0].email, id: data.rows[0].id });
    })
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
};

module.exports = addUser;
