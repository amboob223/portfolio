const POOL = require("pg").Pool
require("dotenv").config()

const pool = new POOL({

    connectionString: process.env.DATABASE_URL

});

module.exports = pool