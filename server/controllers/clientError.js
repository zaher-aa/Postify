const { join } = require('path');

const clientError = (req, res, next) => {
  res.status(404).sendFile(join(__dirname, '../../public/assets/html/404.html'));
};

module.exports = clientError;
