const { join } = require('path');

const handleUserProfilePage = (req, res) => {
  res.sendFile(join(__dirname, '../../public/assets/html/profile.html'));
};

module.exports = handleUserProfilePage;
