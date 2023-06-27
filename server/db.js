const POOL = require("pg").Pool;
require("dotenv").config()

const pool = new POOL(
    {
        host: "dpg-ci98a918g3ne2egvnabg-a.ohio-postgres.render.com",
        database: "port_rf7h",
        port: 5432,
        user: "port_rf7h_user",
        password: "jq5CXXQiLSOmPWqgwMnqhaCYwizz6N4p"
    }
);

module.exports = pool