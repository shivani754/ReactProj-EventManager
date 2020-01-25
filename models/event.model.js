const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const eventSchema=new Schema({
    ambas:{type:String,required:true},
    university:{type:String,required:true},
    fest:{type:String,required:true},
    imgUrl:{type:String,required:true},
    fname:{type:String,required:true},
    event:{type:String,required:true},
    ename:{type:String,required:true},
    efee:{type:String,required:true},
    estartdate:{type:String,required:true},
    eenddate:{type:String,required:true},
    estarttime:{type:String,required:true},
    eendtime:{type:String,required:true},
    state:{type:String,required:true},
    city:{type:String,required:true},
    organisation:{type:String,required:true},
    description:{type:String,required:true},
    pincode:{type:Number,required:true},
    accomodation:{type:String,required:true}
},{
    timestamps:true
});

const Event=mongoose.model('Event',eventSchema);

module.exports=Event;