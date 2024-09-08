import React from 'react'
import '../App.css' ;
import { FiPlus } from "react-icons/fi";

const Expense = () => {
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
                          <button>Login</button>
                          <button>Sign up</button>
                     </div>
               </div>
       
               {/* to add  */}
               <div className='add-part'>
                     <div className='add-part-box'>
                           <span className='add-part-text'>Add new expense</span>
                           <button className='add-part-btn' ><FiPlus className='add-part-btn-i'/></button>
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
       
           </div>
           
       
       
        </>
         )
}

export default Expense
