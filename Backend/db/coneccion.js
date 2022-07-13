require("dotenv").config()
const mongoose = require("mongoose")

const MongoDB = mongoose.connect(process.env.mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
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
    hash:String,
    salt:String,
})


const User = mongoose.model('User', UserShema);
const Task = mongoose.model('Task', TaskShema);

module.exports ={
    MongoDB,
    Task,
    User    
}
