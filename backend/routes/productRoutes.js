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



//This route is used to get all product data
router.get('/view',auth,async(req,res)=>{
    Products.find().then((product)=>{
        res.json(product)
    }).catch((err)=>{
        return res.status(500).json({msg:err})
    })
})



//This route is used to get some specific product
router.get('/getOne/:id',auth,async(req,res)=>{
    var id = req.params.id;

    Products.findById(id).then((product)=>{
        
            res.json(product);
    
    }).catch((err)=>{
        console.log(err);
    })
})



//This route used to update a product details
router.put('/update/:id',auth,async(req,res)=>{
    let productId = req.params.id;

    const {name,description,quantity,userId} =req.body;
 
    const updateProduct = {
        name,description,quantity,userId
     };

     await Products.findByIdAndUpdate(productId,updateProduct).then(()=>{
        res.status(200).send({status:"product updated"});
    }).catch((err)=>{
        res.status(500).json({errMsg:err});
    })
})



//This route used to retrieve all products that are relevent to one user id
router.get('/view/:id',auth,async(req,res)=>{
    let productId = req.params.id;
    console.log(productId)
    await Products.find({userId : productId}).then((product)=>{
        res.json(product);
    }).catch((err)=>{
        console.log(err);
    })
})

//This route used to delete products from table
router.delete('/remove/:id',auth,async(req,res)=>{
    let productId = req.params.id;
    await Products.findByIdAndDelete(productId).then(()=>{
        res.status(200).send({status:"Deleted"});
    }).catch((e)=>{
        res.status(500).send({status:"Error"});
    })
})
module.exports = router;
