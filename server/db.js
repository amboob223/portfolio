const POOL = require("pg").Pool;
require("dotenv").config()

const pool = new POOL({

    connectionString: process.env.DATABASE_URL

});
pool.connect()

module.exports = pool