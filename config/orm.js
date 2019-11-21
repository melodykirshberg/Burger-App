// Import MySQL connection.
const connection = require("../config/connection.js");

const orm = {
  selectAll: function (cb) {
    const queryString = 'select * from burgers'
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (burgerName, cb) {
    connection.query('insert into burgers (burger_name) values ?', [burgerName], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (id, cb) {
    const queryString = 'update burgers set devoured = 1 where id = ?';
    connection.query(queryString, [id], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;