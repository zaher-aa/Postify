const dbConnection = require('../config/connections');

const getAllcomments = () => dbConnection.query('SELECT * FROM comments');
module.exports =getAllcomments;
