require("./db/coneccion")
const express = require("express");
const app = express();
const tasks = require("./routers/tasks")
const DB = require("./db/coneccion")
const path = require('node:path');
const cors = require("cors")
var corsOptions = {origin: 'http://localhost:3000'}
app.use(cors(corsOptions))
app.use(express.json())

app.use("/api/v1/todo",tasks)
// Login Logout and Register
app.post("/api/v1/login",(req,res)=>{
    res.send()
})
app.post("/api/v1/register",(req,res)=>{
    res.send()
})
app.get("/api/v1/logout",(req,res)=>{
    res.send()
})


const start = async ()=>{
    try {
        await DB()
        app.listen(5000)
    } catch (error) {
        console.log(error)
    }
}
start()