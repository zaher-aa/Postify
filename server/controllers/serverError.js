const { join } = require('path');

const serverError = (req, res) => {
  res.status(500).sendFile(join(__dirname, '../public/500.html'));
};

module.exports = serverError;
