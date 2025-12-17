const db = require("../config/database");
const create = (firstname, lastname, email, password, callback) => {
    console.log(firstname, lastname, email, password)
  const sql = "INSERT INTO user(firstname, lastname, email, password) VALUES (?,?,?,?)";
  db.query(sql, [firstname, lastname, email, password], callback);
};
const getAll = (callback) => {
  const sql = "SELECT * FROM user ";
  db.query(sql, (error, results) => {
    callback (error, results);
  });
};
const finById = (id, callback) => {
  const sql = "SELECT * FROM user WHERE id =?";
  db.query(sql, [id], callback);
};
const update = (
  firstname,
  lastname,
  email,
  id,
  callback
) => {
  const sql = `UPDATE user SET 
    firstname = ?, 
    lastname = ?, 
   email= ?
    WHERE id =?`;
  db.query(
    sql,
    [firstname, lastname, email, id],
    callback
  );
};

const deleteUser = (id, callback) => {
  const sql = "DELETE FROM article WHERE id = ?";
  db.query(sql, [id], callback);
};

module.exports = {
  create,
  getAll,
  finById,
  update,
  deleteUser
};
