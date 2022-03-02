const checkUser = require('./checkUser');
const addUser = require('./addUser');
const homePageHandler = require('./homePageHandler');
const handleUserProfilePage = require('./handleUserProfilePage');
const handleUserInfo = require('./handleUserInfo');
const getUserPosts = require('./getUserPosts');
const clientError = require('./clientError');
const serverError = require('./serverError');
const addPost=require('./addPost')
const getPosts=require('./getPost')
const  addCommenttoData=require('./addComment')
const  fetchComments =require('./getComments')

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
  addCommenttoData,
  fetchComments
};
