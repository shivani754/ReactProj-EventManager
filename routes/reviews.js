const router=require('express').Router();
let Review=require('../models/review.model');

router.route('/').get((req,res)=>{
    Review.find()
     .then(reviews=>res.json(reviews))
     .catch(err=>res.status(400).json('Error:'+err))
})

router.route('/add').post((req,res)=>{
    const name=req.body.name;
    const college=req.body.college;
    const fest=req.body.fest;
    const rev=req.body.rev;
    const date=Date.parse(req.body.date);
    const time=req.body.time;
    const rate=req.body.rate;
    const count=req.body.count;
 //   const comments={"date":Date.parse(req.body.date),"time":req.body.time,"comment":req.body.comment}
 const comments=req.body.comments;
    const newReview=new Review({
        name,
        college,
        fest,
        rev,
        date,
        time,
        rate,
        count,
       comments
    });

    newReview.save()
     .then(()=>res.json('Review added!!'))
     .catch(err=>res.status(400).json('Error:'+err))
})

router.route('/addComment/:id').put((req,res)=>{
   
    Review.findByIdAndUpdate(req.params.id,{comments:req.body.comments})
    .then(review=>{
        review.save()
           .then(()=>res.json('Comment added!!'))
          .catch(err=>res.status(400).json('Error:'+err))
    })
    .catch(err=>res.status(400).json('Error:'+err))
})
router.route('/liked/:id').put((req,res)=>{
   
    Review.findByIdAndUpdate(req.params.id,{count:req.body.count})
    .then(review=>{
        review.save()
           .then(()=>res.json('liked!!'))
          .catch(err=>res.status(400).json('Error:'+err))
    })
    .catch(err=>res.status(400).json('Error:'+err))
})
module.exports=router;