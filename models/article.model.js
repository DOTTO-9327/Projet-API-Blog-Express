const db = require("../config/database");

const findAll = (callback) => {
  const sql = "SELECT * FROM article";
  db.query(sql, callback);
};
module.exports = {
  findAll,
};
