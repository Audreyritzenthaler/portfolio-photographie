const mysql = require('mysql')
require('dotenv').config()

const secret = process.env.JWT_SECRET

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

module.exports = connection