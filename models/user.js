
const mongoose = require("mongoose")

const studentSignup = new mongoose.Schema({

    firstname: {type: String, 
        require: true, 
        lowercase: true},
    lastname: {type: String,
         require: true,
          lowercase: true},
    email: {type: String,
         require: true,
          unique: true},
    gender: {type: String,
         require:true},
    password: {type: String,
         require:true},
    username: {type: String,
         require:true},
    department: {type: String, 
        require:true},
    

}, { timestamps: true})


const User = mongoose.model("User",studentSignup)


module.exports = User