const dbConnection=require('../config/connections')
const addComment=(body)=>{
    console.log('the body data',body)
    return dbConnection.query({
        text:'INSERT INTO comment (content,user_id,post_id) VALUES ($1,$2,$3) RETURNING *',
        values:[body.username,body.content,0,body.url,body.id]
    })

}
module.exports=addComment;