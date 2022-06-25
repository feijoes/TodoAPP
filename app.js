require("./db/coneccion")
const express = require("express");
const app = express();
const tasks = require("./routers/tasks")
const DB = require("./db/coneccion")

app.use(express.json())
// Routes

// GEt all tasks or Create a task
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
        app.listen(5000,() => {
            console.log('Listening to "http://localhost:5000/"');
        });
    } catch (error) {
        console.log(error)
    }
}
start()