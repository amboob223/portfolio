
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    user: "playabook",
    host: "dpg-ci98a918g3ne2egvnabg-a.ohio-postgres.render.com",
    database: "portfolio",
    password: "8896",
    port: 5432
});
module.exports = pool;