const mongoose = require("mongoose")

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

module.exports = mongoose.model("User", UserShema)