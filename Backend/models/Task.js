const mongoose = require("mongoose")

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

module.exports = mongoose.model("Task", TaskShema)