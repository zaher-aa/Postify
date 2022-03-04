const { join } = require('path');

module.exports = (req, res, next) => {
  res.status(404).sendFile(join(__dirname, '../../../public/assets/html/404.html'));
  next();
};
