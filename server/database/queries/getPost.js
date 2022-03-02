const dbConnection=require('../config/connections')
const getAllpost=()=>{
return dbConnection.query('SELECT * FROM posts')
}
module.exports=getAllpost;