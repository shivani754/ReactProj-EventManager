const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:Number,required:true},
    emailId:{type:String,required:true,unique:true},
    cart:[{
         type:mongoose.Schema.Types.ObjectId,default:[]
    }]
    // address:[{
    //     flat:{type:String,required:true},
    //     city:{type:String,required:true},
    //     state:{type:String,required:true}
    // }]
},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);

module.exports=User;