// require("dotenv").config();
import  express  from "express";
// const express = require("express");
import cors from "cors";
// const mysql = require("mysql2");
import conn from "./db/conn.js";
// const cors = require("cors");
// require("./db/conn");
// const router = require("./Routes/router");
import router from "./Routes/router.js";


// app.get("/",(req,res)=>{
//     res.send("server start")
// });
const app = express();

const port = 8001;

// middleware
app.use(express.json())
app.use(cors());

app.use(router);



app.listen(port,()=>{
  
    console.log("server starts at port no :" + port);
})