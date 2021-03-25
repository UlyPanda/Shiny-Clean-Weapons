const mysql = require('mysql')
require('dotenv').config()


class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating mysql connection...')

      const config = {
        connectionLimit: 100,
        host: 'den1.mysql3.gear.host',
        user: 'firearms',
        password:'Gs8V4aYG_2b!',
        database: 'firearms'
      }

      this.pool = mysql.createPool(config)

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;