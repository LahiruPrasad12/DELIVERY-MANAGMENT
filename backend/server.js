const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();




/*---------------------------------set up server-------------------------------*/
const app = express();
app.use(express.json());


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

//This route for test
app.use("/auth",require('./routes/userRoutes'));