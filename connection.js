// connection.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Garrett123!',
  database: 'SQLconnection' 
});

module.exports = connection;
