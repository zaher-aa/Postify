const { join } = require('path');

module.exports = (req, res) => {
  res.sendFile(join(__dirname, '../../../public/assets/html/profile.html'));
};
