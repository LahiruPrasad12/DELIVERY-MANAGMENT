const router = require("express").Router();
const User = require('../models/userModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


var mail = null;

router.post("/", async (req,res)=>{
    res.send("Test")
})


//This route is used to register a new user
router.post('/register', async(req,res)=>{
    try{

        //get all details that user entered
        const {firstName, lastName, phone, email, address, password, conPassword} = req.body;


        /*-----------------------validate details-------------------------*/
        //chack user filed all required data
        if(!firstName || !lastName || !phone || !email || !address || !password || !conPassword)
            return res.status(400).json({msg : "please enter all required fill"})
        
        //check password length
        if(password.length<6)
            return res.status(400).json({msg : "please enter a password of at least 6 character"})
        
        //check password and confirm password are match
        if(password !== conPassword)
            return res.status(400).json({msg : "please enter the same password twice"})


        // check user entered email already existing or not
        const existingUser = await User.findOne({email});
        if(existingUser)
            return res.status(400).json({msg : "email already exists"})


        //hash password
        const salt =  await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password,salt);

        mail = email

        //save new user accout to database
        const newUser = new User({
            firstName, lastName, phone, email, address, hashPassword
        })

        await newUser.save().then((user)=>{
            res.json(user)
        }).catch((err)=>{
            res.json(err)
        })




        
    }catch(err){
        console.error(err);
        res.status(500).send(err);
    }
})

module.exports = router;