const db = require("../config/database");

const findAll = (callback) => {
  const sql = "SELECT * FROM article";
  db.query(sql, callback);
};
const finById = (id, callback) => {
  const sql = "SELECT * FROM article WHERE id = ?";
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

module.exports = {
  findAll,
  finById,
  create,
};
