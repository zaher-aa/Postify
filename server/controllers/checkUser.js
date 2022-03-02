const { checkUserQuery } = require('../database/queries');

const checkUser = (req, res) => {
  const { email, password } = req.query;

  checkUserQuery(email, password)
    .then((data) => {
      if (data.rows.length) {
        res.json({
          username: data.rows[0].username, email: data.rows[0].email, id: data.rows[0].id,
        });
      } else {
        res.json(data.rows);
      }
    })
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
};

module.exports = checkUser;
