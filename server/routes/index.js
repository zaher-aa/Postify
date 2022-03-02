const router = require('express').Router();

const {
  clientError,
  serverError,
  addPost,
  getPosts
} = require('../controllers');
router.get('/getPosts',getPosts)
router.post('/addPost',addPost)
router.use(clientError);
router.use(serverError);

module.exports = router;
