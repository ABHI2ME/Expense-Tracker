import React , {useState} from 'react'
import axios from "axios" ;

import {useNavigate} from "react-router-dom";

const Register = () => {
  
const navigate = useNavigate();
    
    const [name  , setName] = useState("") ;
    const [email , setEmail] = useState("" ) ;
    const [password , setPassword] = useState("") ;
    
    const data = {
      name : name , 
      email : email , 
      password : password 
    }

    function toRegister(){
       
      axios.post("http://localhost:5000/register" , data)
      .then((response)=>{
          console.log(response) ;
          navigate("/login") ;
      })
      .catch((error)=>{
         alert("error occured while registring") ;
         console.log(error)
      }) ;


        console.log(name , email , password) ;
       
    }

    function onSignInClick(){
       navigate("/login") ;
    }



    return (
        <>
        
        
    
      <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
    
       <div className="signin"> 
    
        <div className="content"> 
    
         <h2>Registration</h2> 
    
         <div className="form"> 

         <div className="inputBox"> 
    
    <input type="text" required onChange={(e)=>setName(e.target.value)} /> <i>Name</i> 

   </div> 
    
          <div className="inputBox"> 
    
           <input type="text" required  onChange={(e)=>setEmail(e.target.value)} /> <i>Email</i> 
    
          </div> 
    
          <div className="inputBox"> 
    
           <input type="password" required onChange={(e)=>setPassword(e.target.value)} /> <i>Password</i> 
    
          </div> 
    
          <div className="links"><button className='buttonstyling' onClick={() => onSignInClick()}>Signin</button> 
    
          </div> 
    
          <div className="inputBox"> 
    
          <div className="links"><button className='buttonstyling' onClick={()=>toRegister()} style={{backgroundColor:'green'}}>Register</button> 
          </div>
    
          </div> 
    
         </div> 
    
        </div> 
    
       </div> 
    
      </section> 
    
    
    
    
        
        
        </>


)



}

export default Register
