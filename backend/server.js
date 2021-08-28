const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
require("dotenv").config();




/*---------------------------------set up server-------------------------------*/
const app = express();
app.use(express.json());


app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{console.log(`server started on PORT : ${PORT}`)});




/*---------------------------------Connect to mongoDB-------------------------------*/
const URL= process.env.MONGO_CONNECT;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
});

const connection =mongoose.connection;

connection.once("open", ()=>{
    console.log("mongoDB Connection successful")
})




/*---------------------------------set Routes-------------------------------*/


//This route product handeling
app.use("/product",require('./routes/productRoutes'))