const { join } = require('path');

const serverError = (req, res) => {
  res.status(404).sendFile(join(__dirname, '../public/404.html'));
};

module.exports = serverError;
