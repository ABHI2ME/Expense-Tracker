const mongoose = require('mongoose') ;
const cors = require('cors') ;
const validator  = require('validator') ;

const registerSchema = new mongoose.Schema({
    name: {
        type : String , 
        required : true 
    } ,
    email: {
       type : String , 
       required : true , 
       unique : true , 
       validate: [validator.isEmail, 'Invalid email']
    } , 
    password: {
        type : String , 
        required : true 
    }
})

const registerModel = mongoose.model("Register" , registerSchema) ;

module.exports = registerModel ;