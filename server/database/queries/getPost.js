const dbConnection = require('../config/connections');

const getAllpost = () => dbConnection.query('SELECT * FROM posts');
module.exports = getAllpost;
