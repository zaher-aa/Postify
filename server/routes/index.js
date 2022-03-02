const router = require('express').Router();

const {
  checkUser,
  addUser,
  clientError,
  serverError,
  addPost,
  getPosts
} = require('../controllers');
router.get('/check-user', checkUser);
router.post('/register', addUser);
router.get('/getPosts',getPosts)
router.post('/addPost',addPost)


router.get('/check-user', checkUser);
router.post('/register', addUser);
router.use(clientError);
router.use(serverError);

module.exports = router;
