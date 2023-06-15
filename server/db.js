const POOL = require("pg").Pool
const pool = new POOL({
    user: "postgres",
    password: "8896",
    port: 5432,
    database: "port",
    host: "localhost"
});

module.exports = pool