const router = require('express').Router();

const {
  checkUser,
  addUser,
  clientError,
  serverError,
  addPost,
  getPosts,
  addCommenttoData
} = require('../controllers');
router.get('/check-user', checkUser);
router.post('/register', addUser);
router.get('/getPosts',getPosts)
router.post('/addPost',addPost)
router.post('/addCommit',addCommenttoData)


router.use(clientError);
router.use(serverError);

module.exports = router;
