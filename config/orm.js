// Import MySQL Connection ===============
const connection = require("../config/connection.js");
// =======================================

// // Helper to generate MySQL syntax =======
// function printQMarks(num) {
//   var arr = [];
//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }
//   return arr.toString();
// }
// // =======================================

// // Helper to generate MySQL syntax =======
// function objToSql(ob) {
//   var arr = [];

//   for (var key in ob) {
//     const value = ob[key];
//     if (Object.hasOwnProperty.call(ob, key)) {
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       arr.push(key + "=" + value);
//     }
//   }
//   return arr.toString();
// }
// // =======================================

// ORM ===================================
const orm = {
  selectAll: function (tableInput, cb) {
    const queryString = "SELECT * FROM ??" + tableInput + ";";
    connection.query(queryString, tableInput, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, set, cb) {
    const queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [table, set], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function (table, set, id, cb) {
    const queryString = "UPDATE ?? SET ? WHERE ?";
    connection.query(queryString, [table, id], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne: function (table, id, cb) {
    const queryString = "DELETE FROM ?? WHERE id = ?";
    connection.query(queryString, [table, id], function (err, result) {
      if (err) throw err;
      cb(result);
    })
  }
};
// =======================================

// Export ORM ============================
module.exports = orm;
// =======================================