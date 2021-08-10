const mongoose = require("mongoose");

const productrSchem = new mongoose.Schema({
    name : {type: String, required : true},
    description : {type: String, required : true},
    quantity : {type: Number, required : true},
    userId : {type: String, required : true},
})

const Products = mongoose.model("Products",productrSchem);

module.exports = Products;