const { join } = require('path');

module.exports = (err, req, res, next) => {
  res.status(500).sendFile(join(__dirname, '../../../public/assets/html/500.html'));
};
