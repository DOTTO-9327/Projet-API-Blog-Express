const db = require("../config/database");
const create = (firstname, lastname, email, password, callback) => {
    console.log(firstname, lastname, email, password)
  const sql = "INSERT INTO user(firstname, lastname, email, password) VALUES (?,?,?,?)";
  db.query(sql, [firstname, lastname, email, password], callback);
};

module.exports = {
  create,
};
