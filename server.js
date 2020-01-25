const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const config=require('config');
const cookieParser = require('cookie-parser');
const app=express();
const port=process.env.PORT||5000;

app.use(cors()); //middleware
app.use(express.json());
app.use(cookieParser());
//const uri=process.env.ATLAS_URI;
const uri=config.get('ATLAS_URI');
mongoose.connect(uri,{useNewUrlParser:true ,useCreateIndex:true,useUnifiedTopology: true});
const connection=mongoose.connection;
connection.once('open',()=>{
      console.log("mongo db connection established");
})

const eventRouter=require('./routes/event'); 
const hotelRouter=require('./routes/hotel');
const reviewRouter=require('./routes/reviews');
const userRouter=require('./routes/user');
const authRouter=require('./routes/auth');

app.use('/event',eventRouter);  //.../event will going to load everything in eventRouter
app.use('/hotel',hotelRouter);
app.use('/reviews',reviewRouter);
app.use('/user',userRouter);
app.use('/auth',authRouter);

app.listen(port,()=>{
    console.log('listening');
})