const express = require("express") ;
const cors = require("cors") ;
const dotenv = require("dotenv") ;
const path = require("path") ;
const mongoose = require("mongoose") ;
const RegisterModel = require('./config/db') ;
const bodyParser = require("body-parser");



const app = express() ;
app.use(cors()) ;
app.use(express.json()) ;
app.use(bodyParser.json()) ; 

mongoose.connect("mongodb://127.0.0.1:27017/Authentication") ;

app.post('/register' , async (req , res)=>{

    console.log("made it here") ;
    const a = {name:req.body.name , email : req.body.email , password : req.body.password , details:[]};

    try{
       const find = req.body.email ;
       const userEmail = await RegisterModel.findOne({find}) ;
       console.log(userEmail) ;
       if(userEmail === null){
        RegisterModel.create(a)
        .then((item)=>res.json(item))
       }
       else{
         res.json({message : "user already registred"}) ;
       }
    }catch(error){
         console.log("registration error server side " ,  error) ;
        
    }
           
  
})

app.post('/login' , async (req , res)=>{
    const {email  , password} = req.body ;
    try{
        
        const user = await  RegisterModel.findOne({email}) ;
        if(!user){
            return res.status(200).json({ error: true, message: "User not found" }) ;
        }

        const isMatch = await RegisterModel.findOne({password}) ;
        if(user && !isMatch){
            return res.status(200).json({ error: true, message: "Wrong password" })
        }
        else if(!user && !isMatch){
             return res.status(200).json({ error: true, message: "Invalid credentials" }) ;
        }

        return res.status(200).json({ error: false, message: "User is registered", userId : user._id , email :user.email }) ;
    }
    catch{
        return res.status(500).json({error : "error occured"}) ;
    }
})

app.put('/user' , async (req , res)=>{
   const {val , userId} = req.body ;
   try{
    const userData = await RegisterModel.findByIdAndUpdate(userId , {$push:{details : val}} , {new: true} ) ;
    if(userData){
        return res.json({message : "value updated"} ) ;
    }
   
   }catch(error){
       console.log(error) ;
   }


}) ;

app.get('/user/:userId' , async (req , res)=>{
   const userId = req.params.userId ;
   try{
    const dataToRetuened = await RegisterModel.findById(userId) ;
    if(dataToRetuened){
        return res.json(dataToRetuened.details) ;
    }
    else{
        return res.json({message : "no userid found"}) ;
    }
   }catch(error){
       console.log(error) ;
   }


});


app.listen(5000 , ()=>{
    console.log("server is running ?? ")
})

