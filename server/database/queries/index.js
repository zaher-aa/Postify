const { getAllComments, addCommentQuery } = require('./comments');

const {
  createUser,
  checkUserQuery,
  getUserInfo,
  getUserPostsQuery,
} = require('./user');

const {
  getPost,
  addPost,
  deletePostQuery,
} = require('./posts');

module.exports = {
  createUser,
  checkUserQuery,
  getUserInfo,
  getUserPostsQuery,
  deletePostQuery,
  getPost,
  getAllComments,
  addCommentQuery,
  addPost,
};
