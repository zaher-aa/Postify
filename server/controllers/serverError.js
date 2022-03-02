const { join } = require('path');

const serverError = (err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '../../public/assets/html/500.html'));
};

module.exports = serverError;
