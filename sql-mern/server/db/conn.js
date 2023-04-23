// const mysql = require("mysql2");
import mysql from 'mysql';

const conn = mysql.createConnection({
    host   : 'localhost',
    user  : 'root',
    password : '',
    database : 'crud'
});


conn.connect((err)=>{
    if(err){
    console.log("DB connected");
}else(
    console.log("database is connecting")
)
});
export default conn;