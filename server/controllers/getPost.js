const getAllpost =require('../database/queries/getPost')
const getPosts=(req,res)=>{
    
    getAllpost().then((response) => res.json(response.rows))
    ///.then(res=> res.json(res))

}
module.exports=getPosts;