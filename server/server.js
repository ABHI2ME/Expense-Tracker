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

app.post('/register' , (req , res)=>{
    console.log("made it here") ;
   RegisterModel.create(req.body)
   .then((item)=>res.json(item))
   .catch((error)=>res.json(error)) ;
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

        return res.status(200).json({ error: false, message: "User is registered" }) ;
    }
    catch{
        return res.status(500).json({error : "error occured"}) ;
    }
})


app.listen(5000 , ()=>{
    console.log("server is running ?? ")
})

