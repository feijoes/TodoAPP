require("dotenv").config()
const mongoose = require("mongoose")

const connect =  async ()=>{
    await mongoose.connect(process.env.mongoDB)
    console.log("Conecct to MongoDB")

}

module.exports = connect;