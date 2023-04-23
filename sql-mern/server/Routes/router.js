// const express = require("express");
// const router = new express.Router();
// const conn = require("../db/conn");
import conn from "../db/conn.js"
import  express  from "express";

const router = express()
// register user data
router.post("/create", (req, res) => {

    // console.log(req.body);

    const { name, email, age, mobile } = req.body;

    if (!name || !email || !age || !mobile) {
        res.status(422).json("plz fill the all data");
    }

    try {
        conn.query("SELECT * FROM users WHERE email = ?", email, (err, result) => {
            if (result.length) {
                res.status(422).json("This Data is Already Exist")
            } else {
                conn.query("INSERT INTO users SET ?", { name, email, age, mobile }, (err, result) => {
                    if (err) {
                        console.log("err" + err);
                    } else {
                        res.status(201).json(req.body);
                    }
                })
            }
        })
    } catch (error) {
        res.status(422).json(error);
    }

});




// get userdata
// get value on edit page also 
router.get("/getusers",(req,res)=>{

    conn.query("SELECT * FROM users",(err,result)=>{
        if(err){
            res.status(422).json("nodata available");
        }else{
            res.status(201).json(result);
        }
    })
});


// user delete api

router.delete("/deleteuser/:id",(req,res)=>{

    const {id} = req.params;

    conn.query("DELETE FROM users WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    })
});



// get single user

 router.get("/induser/:id",(req,res)=>{

    const {id} = req.params;

    conn.query("SELECT * FROM users WHERE id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json("error");
        }else{
            res.status(201).json(result);
        }
    })
});
// single user  vieweer 

// update users api


  router.put("/updateuser/:id",(req,res)=>{

    const {id} = req.params;

    const data = req.body;
// res.status(200).json(data);
// console.log("helo update user");
    conn.query("UPDATE users SET ? WHERE id = ? ",[data,id],(err,result)=>{
        if(err){
            res.status(422).json({message:"error"});
        }else{
            res.status(201).json(result);
        }
    })
});

// module.exports = router;
export default router;



