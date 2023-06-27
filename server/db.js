const POOL = require("pg").Pool
require("dotenv").config()

const pool = new POOL({
    host: "dpg-ci98a918g3ne2egvnabg-a.ohio-postgres.render.com",
    ssl: true,
    database: "port_rf7h",
    password: "jq5CXXQiLSOmPWqgwMnqhaCYwizz6N4p",
    user: "port_rf7h_user",

});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};

module.exports = pool