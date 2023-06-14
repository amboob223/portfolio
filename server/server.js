const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors())
app.use(express.json())//json parse 

//post
app.post("/work", async (req, res){
    const
})