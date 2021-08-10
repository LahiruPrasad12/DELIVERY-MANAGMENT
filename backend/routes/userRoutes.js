const router = require("express").Router();
const User = require('../models/userModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


var userId = null;


//This route is used to register a new user
router.post('/register', async(req,res)=>{
    try{

        console.log("Its ok")
        //get all details that user entered
        const {firstName, lastName, phone, email, address, password} = req.body;


        /*-----------------------validate details-------------------------*/
        //chack user filed all required data
        if(!firstName || !lastName || !phone || !email || !address || !password){
            console.log("erroe1")
            return res.status(400).json({msg : "please enter all required fill"})
        }
       
        
        //check password length
        if(password.length<6){
            console.log("error2")
            return res.status(400).json({msg : "please enter a password of at least 6 character"})

        }
            
        // check user entered email already existing or not
        const existingUser = await User.findOne({email});
        if(existingUser){
            console.log("error3")
            return res.status(400).json({msg : "email already exists"})
        }
            


        //hash password
        const salt =  await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password,salt);

        

        //save new user accout to database
        const newUser = new User({
            firstName, lastName, phone, email, address, hashPassword
        })

        userId = newUser._id;
        await newUser.save().then((user)=>{
          
        }).catch((err)=>{
            res.json(err)
        })


        //sign the tokrn
        const token = jwt.sign({
            user : newUser._id
        },process.env.JWT_SECRET);

        console.log(token);


        //send the token in the HTTP-only cookie
        res.cookie("token",token,{
            httpOnly : true
        }).send();



    }catch(err){
        console.error(err);
        res.status(500).send(err);
    }
})







//This route for log in user
router.post('/login',async(req,res)=>{
    try{

        //Get user enterd details
        const {email,password} = req.body;
        console.log(email, password)
         /*-----------------------validate details-------------------------*/
        //chack user filed all required data
        if(!email || !password){
            return res.status(400).json({msg : "please enter all required fill"})
        }
            

        //check user enter mail is whether exsisting the database
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(400).send({msg : "invalid mail address"});
        }
            

        //check whether user enter password is correct
        const passwordIsCorrect = await bcrypt.compare(password,existingUser.hashPassword);
        if(!passwordIsCorrect)
            return res.status(400).send({msg : "invalid password"});

        userId = existingUser._id;

        //sign the token
        const token = jwt.sign({
            user : existingUser._id,
            },process.env.JWT_SECRET);
        
        console.log("ok3")
         //send the token in the HTTP-only cookie
        res.cookie("token",token,{
            httpOnly : true
        }).send();


    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})





//This route for log out  a login user
router.route("/logout").get(async(req,res)=>{
    res.cookie("token","",{
        httpOnly:true,
        expires: new Date(0)
    }).send();
})



//This route will return logedin user's mail address
router.get("/loggedIn",(req,res)=>{
    try{
        console.log(req.cookies.token);
        const token = req.cookies.token;

        if(!token)
            res.json(null);

        jwt.verify(token,process.env.JWT_SECRET);
        res.send({userId : userId})

    }catch(err){
        console.error(err);
        res.json(null);
    }
})

module.exports = router;