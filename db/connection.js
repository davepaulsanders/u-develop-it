const mysql = require("mysql2");
require("dotenv").config();
const password = process.env.MYSQL_KEY;

const db = mysql.createConnection({
  host: "localhost",
  // Your MySQL username,
  user: "root",
  // Your MySQL password
  password: password,
  database: "election",
});

module.exports = db;
