const router=require('express').Router();
let User=require('../models/user.model');
const bcrypt=require('bcrypt');
const config=require('config');
const jwt=require('jsonwebtoken');
const auth=require('../middleware/auth');
const mongoose = require('mongoose');
router.route('/').get((req,res)=>{
    User.find()
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error:'+err))
})
router.route('/getCart').get(auth,(req,res)=>{
    console.log("get cart");
    console.log(req.user.cart);
    res.send({cart:req.user.cart});
})

router.route('/addToCart').put(auth,async (req,res)=>{
    try{
        const ObjectID  = mongoose.Types.ObjectId;     
        req.user.cart = [...req.user.cart,ObjectID(req.body.id)];
        await req.user.save();
        res.send({resType:1})//added to cart
    }
   catch(e){
       res.send({resType:0,cartItem:req.body.id})//saving error
   }
   
})
router.route('/add').post((req,res)=>{
    console.log(req.body);
    delete req.body.rem;
    const fname=req.body.fname;
    const lname=req.body.lname;
    const password=req.body.password;
    const phone=req.body.phone;
    const emailId=req.body.emailId;
    const cart=req.body.cart;
    if(!fname||!password||!phone||!emailId)    //validation
        return res.status(400).json({msg:'Please enter all the fields'});
    
    //checking for existing user
    User.findOne({emailId})
     .then(user=>{
         if(user)
             return res.status(400).json({resType:0});

         const newUser=new User({
            fname,
            lname,
            password,
            phone,
            emailId,
            cart
        })

        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err) throw err;
                newUser.password=hash;
                newUser.save()
                  .then((user)=>{
                      const token=jwt.sign(
                          {id:user.id},    //payload
                          config.get('jwtSecret'),
                          {expiresIn:3600},
                          (err,token)=>{
                              if(err) throw err;
                              res.json({token,user:{id:user.id}})
                          }
                        )
                        
                    })
                 .catch(err=>{console.log(err);
                     res.status(400).json('Error:'+err)})
            })
        })
     })
    
})

module.exports=router;