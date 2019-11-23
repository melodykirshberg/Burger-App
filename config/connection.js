// Dependencies ==========================
const mysql = require("mysql");
let connection;
// =======================================

// MySQL connection ======================
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};
// =======================================

// Connection to MySQL ===================
connection.connect(function (err) {
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
