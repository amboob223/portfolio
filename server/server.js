

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
// const port = process.env.PORT || 3001;


//middleware
app.use(cors());
app.use(express.json())//json parse 

// post
// this is the root  route
// app.get("/", (req, res) => {
//     res.send("Welcome to the portfeeelio website!");
// });

// this is the work route
app.post("/work", async (req, res) => {
    try {
        const { name, phone, email, message } = req.body;
        const newData = await pool.query(
            "INSERT INTO work (name,phone,email,message) VALUES($1,$2,$3,$4) RETURNING *",
            [name, phone, email, message]
        );
        res.json(newData.rows[0])


        // console.log("New data inserted:", newData.rows);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "internal server error" })
    } // you got to do status 500 .json and give it an object with the error property and say internal server errror
});

// Start the server
// const PORT = process.env.PORT || 3000;

app.listen(5000, () => {
    console.log(`Server listening on port`);
});
// server.keepAliveTimeout = 120 * 1000;
// server.headersTimeout = 120 * 1000;

module.exports = app;
