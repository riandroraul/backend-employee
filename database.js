const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee",
});

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "employee",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

conn.connect((err) => {
  if (err) throw err;
  console.log("mysql connected");
});

module.exports = { conn, pool };
