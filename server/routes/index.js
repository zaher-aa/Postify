const router = require('express').Router();

const {
  checkUser,
  addUser,
  homePageHandler,
  clientError,
  serverError,
} = require('../controllers');

router.get('/check-user', checkUser);
router.post('/register', addUser);
router.get('/home', homePageHandler);
router.use(clientError);
router.use(serverError);

module.exports = router;
