const mongoose = require("mongoose");

const userSchem = new mongoose.Schema({
    firstName : {type: String, required : true},
    lastName : {type: String, required : true},
    phone : {type: String, required : true},
    email : {type: String, required : true},
    address : {type: String, required : true},
    hashPassword : {type: String, required : true}
})

const User = mongoose.model("User",userSchem);

module.exports = User;