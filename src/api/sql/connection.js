const mysql = require('mysql')
const dotenv = require('dotenv');


class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')

      const config = {
        connectionLimit: 100,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE
      }

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;