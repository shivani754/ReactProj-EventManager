const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const hotelSchema=new Schema({
    link:{type:String,required:true},
    name:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    phone:{type:Number,required:true}
},{
    timestamps:true
});

const Hotel=mongoose.model('Hotel',hotelSchema);

module.exports=Hotel;