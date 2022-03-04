const { getAllComments } = require('../../database/queries');

module.exports = (req, res) => {
  getAllComments()
    .then((response) => res.json(response.rows))
    .catch(() => res.status(500).json({ message: 'Internal Server Error' }));
};
