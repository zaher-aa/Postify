const { join } = require('path');

const homePageHandler = (req, res) => {
  res.sendFile(join(__dirname, '../../public/assets/html/home.html'));
};

module.exports = homePageHandler;
