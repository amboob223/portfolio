const POOL = require("pg").Pool
require("dotenv").config()

const pool = new POOL({
    host: "dpg-ci98a918g3ne2egvnabg-a.ohio-postgres.render.com",
    ssl: {
        rejectUnauthorized: false
    },
    database: "port_rf7h",
    password: "jq5CXXQiLSOmPWqgwMnqhaCYwizz6N4p",
    user: "port_rf7h_user",

});

module.exports = pool