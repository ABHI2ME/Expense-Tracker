import React, { useState  , useContext}  from 'react';
import './logins.css';
import {useNavigate} from "react-router-dom";
import axios from "axios" ;
// import { Authenticate } from "./Authenticate"; 
// import { useAuth } from './Authenticate';



function Login() {
  const navigate = useNavigate() ;
  const [email , setEmail] = useState("") ;
  const [password , setPassword] = useState("") ;
  // const { isAuthenticate, login, logout } = useContext(Authenticate); 
  // const {login} = useAuth() ; 

  async function toLogin(){
     try{
       const response = await axios.post('http://localhost:5000/login' , {email , password}) ;
      //  console.log(response) ;
       if(response.data.message === "User is registered"){
        //  console.log(typeof(response.data.userId) , typeof(response.data.email)) ;
         const userId = response.data.userId ;
         const userEmail = response.data.email ;
         navigate("/") ;
        //  login(userEmail , userId) ;
         localStorage.setItem( "login" , JSON.stringify(true)  );
         localStorage.setItem( "email" , JSON.stringify(userEmail)) ;
         localStorage.setItem("userId" , JSON.stringify(userId)) ;
         
       }
       else if(response.data.message === "User not found"){
         alert("user not found") ;
       }
       else if(response.data.message === "Wrong password"){
          alert("wrong password") ;
       }
       else if(response.data.message === "Invalid credentials"){
        alert("invalid credentials") ;
       }
     }catch(error){
      // console.log(error) ;
      }  
 

  }

  function onSignUpClick(){
      navigate("/register")  ;
  } ;




  return (
    <>
	
	

  <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 

   <div className="signin"> 

    <div className="content"> 

     <h2>Sign In</h2> 

     <div className="form"> 

      <div className="inputBox"> 

       <input type="text" required onChange={(e)=>setEmail(e.target.value)} /> <i>Email</i> 

      </div> 

      <div className="inputBox"> 

       <input type="password" required onChange={(e)=>setPassword(e.target.value)} /> <i>Password</i> 

      </div> 

      <div className="links"><button className='buttonstyling' onClick={() => onSignUpClick()}>Signup</button> 

      </div> 

      <div className="inputBox"> 

       <input type="submit" onClick={toLogin} value="Login" /> 

      </div> 

     </div> 

    </div> 

   </div> 

  </section> 


	</>
  );
}

export default Login;
