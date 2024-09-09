import React , {useState ,   useEffect} from 'react'
import '../App.css' ;
import { FiPlus } from "react-icons/fi";
import { useNavigate , useLocation } from 'react-router-dom';
import  Popup   from "./Popup";








const Expense = () => {
      
      const [isPopUp , setPopUp] = useState(false) ;
      const [divData , setDivData] = useState([]) ;

      const navigation = useNavigate();     
      const location = useLocation() ;      // way  to recieve the state along with navigating to other page 
      const details = (location.state && location.state.details) || [];
      console.log("here" , details[0]) ;
     // if(details.length !== 0 && details !== undefined){
     //      const val = details[0] ;
     //      setDivData([...divData , val]) ;
     // }
   
     

      const toLogin = () =>{
           navigation("/login");
      }

      const toRegister = () =>{
            navigation("/register");
      }

      const addPartBtnClick =()=>{
           navigation("/popup")
      } ;


    return (
        <> 
           {/* made container here */}
           <div className='container'>
               {/* navbar here */}
               <div className='navbar'>
                     <div className='navbar-logo'>
                    
                     </div>
                     <div className='navbar-links'>
                          <a href='/'>Home</a>
                          <a href='/'>About</a>
                          <button  onClick={() => toLogin()}  >Login</button>
                          <button  onClick={() => toRegister()}>Sign up</button>
                     </div>
               </div>
       
               {/* to add  */}
               <div className='add-part'>
                     <div className='add-part-box'>
                           <span className='add-part-text'>Add new expense</span>
                           <button className='add-part-btn' onClick={()=>addPartBtnClick()} ><FiPlus className='add-part-btn-i'/></button>
                      </div>
               </div>
               
               {/* divs for the expense */}
               <div className= 'expense-div-continer'>
                     <div className='expense-div-created'>
                          <div className='expense-div-created-description'>
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eveniet temporibus nulla amet exercitationem sint quidem quia quisquam aliquam tenetur eius neque fugit dolorum expedita deserunt, 
                     
                          </div>
                          <div className='expense-div-created-date'>
                               22-nov-2024
                           </div>
                          <div className='expense-div-created-bill'>
                             
                          </div>
                     </div>
               </div>

               {/* expense popup */}
               
          
       
           </div>
           
       
       
        </>
         )
}

export default Expense
