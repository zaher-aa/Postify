const { addComment, fetchComments } = require('./comments');
const { homePageHandler, handleUserProfilePage } = require('./pages');
const { clientError, serverError } = require('./err');
const {
  handleUserInfo,
  addUser,
  checkUser,
} = require('./user');
const {
  getUserPosts,
  getPosts,
  addPost,
  deletePost,
} = require('./posts');

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
  addComment,
  fetchComments,
  deletePost,
};
