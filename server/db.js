
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    user: "playabook",
    host: "localhost",
    database: "portfolio",
    password: "8896",
    port: 5432
});
module.exports = pool;