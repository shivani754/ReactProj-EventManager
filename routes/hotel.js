const router=require('express').Router();
let Hotel=require('../models/hotel.model');

router.route('/').get((req,res)=>{
    Hotel.find()
     .then(hotels=>res.json(hotels))
     .catch(err=>res.status(400).json('Error:'+err))
})

router.route('/add').post((req,res)=>{
    const link=req.body.link;
    const name=req.body.name;
    const city=req.body.city;
    const state=req.body.state;
    const phone=req.body.phone;
    const newHotel=new Hotel({
        link,
        name,
        city,
        state,
        phone
    });

    newHotel.save()
     .then(()=>res.json('Hotel added!!'))
     .catch(err=>res.status(400).json('Error:'+err))
})

module.exports=router;