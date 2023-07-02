

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


const corsOptions = {
    origin: "https://abdulmboob.netlify.app/contacts.html",
};

//middleware
app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://abdulmboob.netlify.app/contacts.html");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())//json parse 

// post
// this is the root  route
app.get("/", (req, res) => {
    res.send("Welcome to the portfeeelio website!");
});

// this is the work route
app.post("/work", async (req, res) => {
    try {
        const { name, phone, email, message } = req.body;
        const newData = await pool.query(
            "INSERT INTO work (name,phone,email,message) VALUES($1,$2,$3,$4) RETURNING *",
            [name, phone, email, message]
        );
        res.json(newData.rows)


        // console.log("New data inserted:", newData.rows);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "internal server error" })
    } // you got to do status 500 .json and give it an object with the error property and say internal server errror
});

module.exports = app;
