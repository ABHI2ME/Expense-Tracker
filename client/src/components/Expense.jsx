import React , {useState ,   useEffect , useContext} from 'react'
import '../App.css' ;
import { FiPlus } from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate , useLocation } from 'react-router-dom';
import  Popup   from "./Popup";
import {Context} from "./Context"



const Expense = () => {
      
      const [isPopUp , setPopUp] = useState(false) ;
      const [divData , setDivData] = useState([]);
      const [exactTime , setExactTime] = useState("") ;

      const navigation = useNavigate();     
     //  const location = useLocation() ;      // way  to recieve the state along with navigating to other page 
  

     useEffect(() => {
          
          const data = JSON.parse(localStorage.getItem("data"));

            if(data != null){
             setDivData(data);
            }

        }, []);

        
  



        console.log("divdata length outside " ,  divData.length) ;
  
      
   
     

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
               {divData.length > 0 ? (
                         divData.map((item, index) => (
                              <div key={index} className='expense-div-created'>
                              <div className='expense-div-created-description'>
                                   {item.descriptition}
                              </div>
                              <div className='expense-div-created-date'>
                                   {item.time}
                              </div>
                              <div className='expense-div-created-bill'>
                                   <FaIndianRupeeSign className='expense-div-created-bill-i' />{item.amount}
                              </div>
                              </div>
                         ))
                         ) : []} ;
               </div>

               {/* expense popup */}
               
          
       
           </div>
           
       
       
        </>
         )
}

export default Expense
