const checkUser = require('./checkUser');
const addUser = require('./addUser');
const homePageHandler = require('./homePageHandler');
const handleUserProfilePage = require('./handleUserProfilePage');
const handleUserInfo = require('./handleUserInfo');
const getUserPosts = require('./getUserPosts');
const clientError = require('./clientError');
const serverError = require('./serverError');

module.exports = {
  checkUser,
  addUser,
  homePageHandler,
  handleUserProfilePage,
  handleUserInfo,
  getUserPosts,
  clientError,
  serverError,
};
