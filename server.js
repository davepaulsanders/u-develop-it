const express = require("express");
const PORT = process.env.PORT || 3001;
const mysql = require("mysql2");
require("dotenv").config();
const password = process.env.MYSQL_KEY;
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: password,
    database: "election",
  },
  console.log("Connected to the election database")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
