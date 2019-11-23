// Import MySQL Connection ===============
const connection = require("../config/connection.js");
// =======================================

// Helper to generate MySQL syntax =======
function printQMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}
// =======================================

// Helper to generate MySQL syntax =======
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + '=' + ob[key]);
    }
  }
  return arr.toString();
}
// =======================================

// ORM ===================================
const orm = {
  selectAll: function (tableInput, cb) {
    const queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    const queryString = 'INSERT INTO ' + table;
    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQMarks(vals.length);
    queryString += ') ';

    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, objColVals, condition, cb) {
    const queryString = 'UPDATE ' + table;
    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne: function(table, condition, cb) {
    const queryString = 'DELETE FROM ' + table;
    queryString += ' WHERE ';
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  }
};
// =======================================

// Export ORM ============================
module.exports = orm;
// =======================================