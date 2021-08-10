const router = require("express").Router();
const Products = require('../models/productModel');
const auth = require('../middleware/auth');

router.post('/add',auth,async(req,res)=>{
    try{

        const {name,description,quantity,userId} = req.body;


        /*-----------------------validate details-------------------------*/
         //chack user filed all required data
        if(!name || !description || !quantity || !userId){
            return res.status(500).json({errMsg : "Plesae enter all required fill"})
        }

        const newProduct = new Products({
            name,description,quantity,userId
        })

        await newProduct.save().then((product)=>{
            return res.status(200).json({msg:product})
        }).catch((err)=>{
            return res.status(500).json({msg:err})
        })

    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
})

module.exports = router;
