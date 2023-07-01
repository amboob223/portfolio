const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the portfolio website!");
});

app.post("/work", async (req, res) => {
<<<<<<< HEAD
    try {
        const { name, phone, email, message } = req.body;
        const newData = await pool.query(
            "INSERT INTO work (name,phone,email,message) VALUES($1,$2,$3,$4) RETURNING *",
            [name, phone, email, message]
        );
        res.json(newData.rows)
        fetchData();
        console.log("hhh")

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "internal server error" })
    } // you got to do status 500 .json and give it an object with the error property and say internal server errror
});

async function fetchData() {
    try {
        const result = await pool.query("SELECT * FROM work");
        console.log(result.rows);
    } catch (err) {
        console.error(err);
    }
}




=======
  try {
    const { name, phone, email, message } = req.body;
    const newData = await pool.query(
      "INSERT INTO work (name,phone,email,message) VALUES($1,$2,$3,$4) RETURNING *",
      [name, phone, email, message]
    );
    res.json(newData.rows[0]);
    fetchData(); //you can remove all these
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//test fetch data
async function fetchData() {
  try {
    const result = await pool.query("SELECT * FROM work");
    console.log(result.rows);
  } catch (err) {
    console.error(err);
  }
}
>>>>>>> origin/master

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
