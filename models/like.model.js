const db = require("../config/database");
const create = (user_id, article_id)=>{
const sql = "INSERT INTO article_user_like(user_id, article_id) VALUES(?,?)";
db.query(sql,[user_id, article_id ],callback);


}
module.exports ={create};