const { deletePostQuery } = require('../../database/queries');

module.exports = (req, res) => {
  const { id } = req.params;

  deletePostQuery(id)
    .then(() => res.status(204).end())
    .catch(() => res.status(500).json({ error: 'Internal Server Error' }));
};
