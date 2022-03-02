const  addPostTodata=require('../database/queries/addPost')
const addPost=(req,res)=>{
    addPostTodata(req.body)
    .then(data=>res.json(data.rows)).catch(() => res.status(500).json({ message: 'server error' }));

}
module.exports=addPost;