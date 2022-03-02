const checkUser = require('./checkUser');
const addUser = require('./addUser');
const homePageHandler = require('./homePageHandler');
const clientError = require('./clientError');
const serverError = require('./serverError');

module.exports = {
  checkUser,
  addUser,
  homePageHandler,
  clientError,
  serverError,
};
