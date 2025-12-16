const db = require("../config/database");
const findAll = (callback) => {
  const sql = "SELECT * FROM category";
  db.query(sql, callback);
};

const create = (
    name,
    callback
)=> {
  const sql =
    "INSERT INTO category (name) VALUES (?)" ;
    db.query(
    sql,
    [name],
    callback
  );
};

// Ajouter autres requêtes du CRUD
module.exports = {
  findAll,
  create
};