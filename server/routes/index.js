const router = require('express').Router();

const {
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
} = require('../controllers');

router.get('/home', homePageHandler);
router.get('/profile', handleUserProfilePage);
router.get('/check-user', checkUser);
router.get('/all-posts', getPosts);
router.get('/user-info/:id', handleUserInfo);
router.get('/user-posts/:id', getUserPosts);
router.get('/comments', fetchComments);
router.post('/register', addUser);
router.post('/post', addPost);
router.post('/comment', addComment);
router.delete('/post/:id', deletePost);
router.use(clientError);
router.use(serverError);

module.exports = router;
