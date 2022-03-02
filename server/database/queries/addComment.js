const dbConnection=require('../config/connections')
const addComment=(body)=>{
    console.log('the body data',body)
    return dbConnection.query({
        text:'INSERT INTO comments (content, user_id, post_id) VALUES ($1,$2,$3) RETURNING *',
        values:[body.value,body.user_id,body.post_id]
    })

}
module.exports=addComment;