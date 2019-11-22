const connection = require("../config/connection.js");

function printQMarks(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
}

function objToSql(ob) {
  let arr = [];

  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + '=' + value);
    }
  }
  return arr.toString();
}

const orm = {
  selectAll: function (table, cb) {
    var queryString = 'select * from ' + table + ';';
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    var queryString = 'insert into ' + table;
    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'values (';
    queryString += printQMarks(vals.length);
    queryString += ') ';
    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function (table, objColVals, condition, cb) {
    var queryString = 'update ' + table;
    queryString += ' set ';
    queryString += objToSql(objColVals);
    queryString += ' where ';
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var queryString = 'delete from ' + table;
    queryString += ' where ';
    queryString += condition;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    })
  }
};

module.exports = orm;