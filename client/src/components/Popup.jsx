import React , {useEffect, useState , createContext , useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import styles from './popup.module.css';
// import {Context} from "./Context";
// import { Authenticate  , useAuth } from "./Authenticate";  
import axios from "axios" ;



const Popup = () => {
   const navigation = useNavigate() ; 
   const [descriptition , setDescription] = useState("") ;
   const [amount , setAmount] = useState("") ;
  //  const {details  , setDetails} = useContext(Context) ;
  //  const { isAuthenticate, login, logout , email , userId } = useContext(Authenticate); 
  //  const {email , userId } = useAuth() ;
   const userId = JSON.parse(localStorage.getItem("userId")) ;
   const email = JSON.parse(localStorage.getItem("email"))

   
   function saveDetails(){
      let descr ;
      let amt ;
      let val ;
      let date = new Date() ;
      const day = date.getDate() ;
      const month = date.toLocaleString('default', { month: 'short' });
      const year  = date.getFullYear();
      const exactTime = date.getMilliseconds() ;
      let moment = `${day}-${month}-${year}` ;
      if(descriptition !== "" && amount !== ""){
         descr = descriptition ;
         amt = amount ;
         val = {
             descriptition : descr , 
             amount :  amt , 
             time : moment , 
             watch : exactTime 
         }
        //  console.log(descr,  amt) ;
        //  setDetails((PriviousDetail)=>[...PriviousDetail , val]) ;
        //  setDetails(val) ;
         setDescription("") ;
         setAmount("") ;
        //  setTimeout(() => {
        //   navigation("/" )}, 100);  // the new thing to learn
        let data = JSON.parse(localStorage.getItem("data")) ;
        if(data == null || data.length >0){
           if(data == null )data = [val];
           else data.push(val);       
          localStorage.setItem("data" ,JSON.stringify(data) ) ;
          setTimeout(() => {
          navigation("/" )}, 100);
        }
          
        //  console.log("from popup " , details);
      }
   }

  async function sendData(val , userId){
     try{
        const response = await axios.put('http://localhost:5000/user' , {val , userId}) ;
        // console.log(response) ;
     }catch(error){
        // console.log(error) ;
     }
  }

   function save(){
     
      let descr ;
      let amt ;
      let val ;
      let date = new Date() ;
      const day = date.getDate() ;
      const month = date.toLocaleString('default', { month: 'short' });
      const year  = date.getFullYear();
      const exactTime = date.getMilliseconds() ;
      let moment = `${day}-${month}-${year}` ;
      if(descriptition !== "" && amount !== ""){
        descr = descriptition ;
        amt = amount ;
        val = {
            descriptition : descr , 
            amount :  amt , 
            time : moment , 
            watch : exactTime 
        }

        sendData(val , userId) ;

      
        setDescription("") ;
        setAmount("") ;

         setTimeout(() => {
         navigation("/" )}, 100);
       }
         
       
     
    
   }
   



  return (
    <>
      <div className={styles.popupContainer}>
        <div className={styles.navbar}>
          <div className={styles.navbarLogo}></div>
          <div className={styles.navbarLinks}>
            <a href='/'>Home</a>
            <a href='/'>About</a>
            <button>Login</button>
            <button>Sign up</button>
          </div>
        </div>

        <div className={styles.addPart}>
          <div className={styles.addPartBox}>
            <span className={styles.addPartText}>Add new expense</span>
            <button className={styles.addPartBtn}><FiPlus className={styles.addPartBtnI}/></button>
          </div>
        </div>

        
      </div>
      <div className={styles.popup}>
          <div className={styles.popup1} >
                <div className={styles.popupDescription}>
                  <input type='text' value={descriptition} onChange={(e)=>setDescription(e.target.value)} placeholder='Enter the expense description' className={styles.popupDescriptionInput} />
                </div>
                <div className={styles.popupAmount}>
                  <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)}   placeholder='enter the amount spent' className={styles.popupAmountInput} />
                </div>
                <button className={styles.popupSubmit}  onClick={()=>save()}>Submit</button>
          </div>
          <div className={styles.popup2}>
            <img className={styles.popup2Img} src='../images/img1.jpg' alt='image' />
          </div>
      </div>
    </>
  );
}

export default Popup;
