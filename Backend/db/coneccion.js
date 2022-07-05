require("dotenv").config()
const mongoose = require("mongoose")
const conn = process.env.mongoDB;
const connection = mongoose.createConnection(conn, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const TaskShema = new mongoose.Schema({
    user:{
        type:String,
        require : true
    },
    title:{
        type:String,
        require : [true, "must provide a title"],
        maxlength: [20, "title cant be more than 20 characters"]
    },
    desc: String,
    completed: {
        type:Boolean,
        default:false
    },
})
const UserShema = new mongoose.Schema({
    username: {
        type:String,
        require : [true, "must provide a username"],
        minlength : [6, "username cant be less than 6 charactes"]
    },
    password: {
        type:String,
        require : [true, "must provide a password"]
    }
})
const User = connection.model('User', UserShema);
const Task = connection.model('Task', TaskShema);
module.exports = connection;