const  addPostTodata=require('../database/queries/addPost')
const addPost=(req,res)=>{
    console.log('the body',req.body)
    addPostTodata(req.body)
    .then(data=>data).catch(() => res.status(500).json({ message: 'server error' }));
res.redirect('/assets/html/home.html')
}
module.exports=addPost;