const  addPostTodata=require('../database/queries/addPost')
const addPost=(req,res)=>{
    addPostTodata(req.body).then(data=>console.log('the data',data))
res.redirect('/getPosts')
}
module.exports=addPost;