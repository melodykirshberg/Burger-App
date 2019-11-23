// Dependencies ==========================
const mysql = require("mysql");
// =======================================

// MySQL connection ======================
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});
// =======================================

// Connection to MySQL ===================
connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});
// =======================================

// Export for ORM ========================
module.exports = connection;
// =======================================
