const dbConnection = require('../../config/connections');

module.exports = () => dbConnection.query('SELECT * FROM comments');
