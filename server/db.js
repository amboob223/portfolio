const POOL = require("pg").Pool
const pool = new POOL({
    user: "port_rf7h_user",
    password: "jq5CXXQiLSOmPWqgwMnqhaCYwizz6N4p",
    port: 5432,
    database: "port_rf7h",
    host: "dpg-ci98a918g3ne2egvnabg-a"

});

module.exports = pool