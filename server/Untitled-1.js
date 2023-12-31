
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const { createLogger, transports } = require("winston");
// const pool = require("./db");

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Create a logger instance
// const logger = createLogger({
//     transports: [
//         new transports.Console(), // Output logs to the console
//         new transports.File({ filename: "error.log", level: "error" }) // Output error logs to a file
//     ]
// });

// // Root route
// app.get("/", (req, res) => {
//     res.send("Welcome to the portfeeelio website!");
// });

// // Work route
// app.post("/work", async (req, res) => {
//     try {
//         const { name, phone, email, message } = req.body;
//         const newData = await pool.query(
//             "INSERT INTO work (name, phone, email, message) VALUES ($1, $2, $3, $4) RETURNING *",
//             [name, phone, email, message]
//         );

//         // Log the new data
//         logger.info("New data inserted:", newData.rows);

//         res.json(newData.rows);
//     } catch (error) {
//         logger.error(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// Export the Express app



// async function fetchData() {
//     try {
//         const result = await pool.query("SELECT * FROM work");
//         console.log(result.rows);

//     } catch (err) {
//         console.error(err);
//     }
// }
// this port is for the server