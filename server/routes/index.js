const router = require('express').Router();

const {
  checkUser,
  addUser,
  clientError,
  serverError,
} = require('../controllers');

router.get('/check-user', checkUser);
router.post('/register', addUser);
router.use(clientError);
router.use(serverError);

module.exports = router;
