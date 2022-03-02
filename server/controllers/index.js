const checkUser = require('./checkUser');
const addUser = require('./addUser');
const homePageHandler = require('./homePageHandler');
const handleUserProfilePage = require('./handleUserProfilePage');
const handleUserInfo = require('./handleUserInfo');
const getUserPosts = require('./getUserPosts');
const clientError = require('./clientError');
const serverError = require('./serverError');
const addPost = require('./addPost');
const getPosts = require('./getPost');
const deletePost = require('./deletePost');

module.exports = {
  checkUser,
  addUser,
  homePageHandler,
  handleUserProfilePage,
  handleUserInfo,
  getUserPosts,
  clientError,
  serverError,
  addPost,
  getPosts,
  deletePost,
};
