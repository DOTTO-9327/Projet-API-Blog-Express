const db = require("../config/database");


const findAll = (callback) => {
  const sql = "SELECT * FROM category";
  db.query(sql, callback);
};

const create = (name, callback) => {
  const sql = "INSERT INTO category (name) VALUES (?)";
  db.query(sql, [name], callback);
};

const findById = (id, callback) => {
  const sql = "SELECT id, name FROM category WHERE id = ?";
  db.query(sql, [id], callback);
};

const update = (name, id, callback) => {
  const sql = "UPDATE category SET name = ? WHERE id = ?";
  db.query(sql,[name,id], callback);
};

// Ajouter autres requêtes du CRUD
module.exports = {
  findAll,
  create,
  findById,
  update,
};
