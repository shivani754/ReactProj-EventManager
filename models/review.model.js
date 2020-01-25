const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const reviewSchema=new Schema({
    name:{type:String,required:true},
    college:{type:String,required:true},
    fest:{type:String,required:true},
    rev:{type:String,required:true},
    date:{type:Date,required:true},
    time:{type:String,required:true},
    rate:{type:Number,required:true},
    count:{type:Number,required:true},
    comments:[{
        date:{type:Date,required:true},
        time:{type:String,required:true},
        comment:{type:String,required:true}
    }]
},{
    timestamps:true
});

const Review=mongoose.model('Review',reviewSchema);

module.exports=Review;