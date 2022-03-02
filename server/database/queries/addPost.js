const dbConnection=require('../config/connections')
const addPostTodata=(body)=>{
    console.log('the body',body)
    return dbConnection.query({
        text:'INSERT INTO posts(title,content,likes,image_url)VALUES($1,$2,$3,$4) RETURNING *',
        values:[body.username,body.post,0,body.url]
    })

}
module.exports=addPostTodata;