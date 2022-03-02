const  addComment=require('../database/queries/addComment')
const addCommenttoData=(req,res)=>{
    console.log('i am herer',req.body)
    addComment(req.body)
    .then(data=>res.json(data.rows))
    .catch(() => res.status(500).json({ message: 'server error' }));

}
module.exports= addCommenttoData;