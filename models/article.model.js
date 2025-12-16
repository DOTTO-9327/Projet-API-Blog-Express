const db = require("../config/database");

const findAll = (callback) => {
  const sql = "SELECT * FROM article";
  db.query(sql, callback);
};
const finById = (id, callback) => {
  const sql = "SELECT * FROM article WHERE id =?";
  db.query(sql, [id], callback);
};
const create = (
  title,
  content,
  created_at,
  updated_at,
  category_id,
  callback
) => {
  const sql =
    "INSERT INTO article (title, content, created_at,updated_at,category_id) VALUES (?,?,?,?,?)";
  db.query(
    sql,
    [title, content, created_at, updated_at, category_id],
    callback
  );
};

const update = (
  title,
  content,
  created_at,
  updated_at,
  category_id,
  id,
  callback
) => {
  const sql = `UPDATE article SET 
    title = ?, 
    content = ?, 
   created_at= ?, 
   updated_at = ?, 
   category_id =?
    WHERE id =?`;
  db.query(
    sql,
    [title, content, created_at, updated_at, category_id, id],
    callback
  );
};

const deletes = (id, callback) => {
  const sql = "DELETE FROM article WHERE id = ?";
  db.query(sql, [id], callback);
};
module.exports = {
  findAll,
  finById,
  create,
  update,
  deletes,
};
