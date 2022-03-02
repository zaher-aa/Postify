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
  addCommenttoData
} = require('../controllers');

router.get('/check-user', checkUser);
router.post('/register', addUser);
router.get('/home', homePageHandler);
router.get('/profile', handleUserProfilePage);
router.get('/user-info/:id', handleUserInfo);
router.get('/user-posts/:id', getUserPosts);
router.get('/getPosts', getPosts);
router.post('/addPost', addPost);
router.post('/addCommit',addCommenttoData)
router.use(clientError);
router.use(serverError);

module.exports = router;
