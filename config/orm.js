// Import MySQL Connection ===============
const connection = require("../config/connection.js");
// =======================================

const orm = {
  selectAll: function (tableInput, cb) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, tableInput, cb);
  },
  insertOne: function (table, set, cb) {
    const queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [table, set], cb);
  },
  updateOne: function (table, set, id, cb) {
    const queryString = "UPDATE ?? SET ? WHERE id = ?";
    connection.query(queryString, [table, set, id], cb);
  },
  deleteOne: function (table, id, cb) {
    const queryString = "DELETE FROM ?? WHERE id = ?";
    connection.query(queryString, [table, id], cb);
  }
};
// =======================================

// Export ORM ============================
module.exports = orm;
// =======================================