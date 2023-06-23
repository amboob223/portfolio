const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors(
    {
        origin: "https://portfolio-o78g.onrender.com"
    }

))
app.use(express.json())//json parse 

//post
// this is the root  route
app.get("/", (req, res) => {
    res.send("Welcome to the portfolio website!");
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

        console.log("hhh")

    } catch (error) {
        console.log(error)
    }
});

// app.listen(5000, () => {
//     console.log("yiyy")
// })