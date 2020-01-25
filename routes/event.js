const router=require('express').Router();
let Event=require('../models/event.model');
const auth=require('../middleware/auth');

router.route('/').get((req,res)=>{
    Event.find()
     .then(event=>res.json(event))
     .catch(err=>res.status(400).json('Error:'+err))
})
router.route('/getEve').get((req,res)=>{
    
    Event.findById(req.query.eveId)
     .then(event=>
         res.json(event)
        )
     .catch(err=>res.status(400).json('Error:'+err))
})
router.route('/add').post(auth,(req,res)=>{
    const ambas=req.body.ambas;
    const university=req.body.university;
    const fest=req.body.fest;
    const imgUrl=req.body.imgUrl;
    const fname=req.body.fname;
    const event=req.body.event;
    const ename=req.body.ename;
    const efee=req.body.efee;
    const estartdate=req.body.estartdate;
    const eenddate=req.body.eenddate;
    const estarttime=req.body.estarttime;
    const eendtime=req.body.eendtime;
    const state=req.body.state;
    const city=req.body.city;
    const organisation=req.body.organisation;
    const description=req.body.description;
    const pincode=req.body.pincode;
    const accomodation=req.body.accomodation;
    const newEvent=new Event({
       ambas,
       university,
       fest,
       imgUrl,
       fname,
       event,
       ename,
       efee,
       estartdate,
       eenddate,
       estarttime,
       eendtime,
       state,
       city,
       organisation,
       description,
       pincode,
       accomodation
    });

    newEvent.save()
     .then(()=>res.json('event added!!'))
     .catch(err=>res.status(400).json('Error:'+err))
})

module.exports=router;