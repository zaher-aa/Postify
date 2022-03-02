const dbConnection=require('../config/connections')
const addPostTodata=(body)=>{
    console.log('the body data',body)
    return dbConnection.query({
        text:'INSERT INTO posts(title,content,likes,image_url)VALUES($1,$2,$3,$4,$5) RETURNING *',
        values:[body.username,body.content,0,body.url,body.id]
    })

}
module.exports=addPostTodata;