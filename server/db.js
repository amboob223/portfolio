
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: true,
    },

});

console.log(process.env.DATABASE_URL);


module.exports = pool;
