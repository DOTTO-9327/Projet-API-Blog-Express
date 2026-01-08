const db = require("../config/database");
const create = (user_id, article_id, callback) => {
const sql = "INSERT INTO article_user_like (user_id, article_id) VALUES (?,?)";
db.query(sql, [user_id, article_id], callback);
};

const remove = (user_id, article_id, callback) =>{
    const sql = "DELETE FROM article_user_like WHERE user_id = ? AND article_id = ?";
    db.query(sql, [user_id, article_id], callback);

} 
module.exports = {create, remove};