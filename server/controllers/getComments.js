const getAllcomments = require('../database/queries/getComment');

const fetchComments = (req, res) => {
    getAllcomments().then((response) => res.json(response.rows));
};
module.exports =fetchComments;
