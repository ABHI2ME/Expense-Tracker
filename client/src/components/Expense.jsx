import React, { useState, useEffect } from 'react';
import '../App.css';
import { FiPlus } from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios" ;

const Expense = () => {
    const [isPopUp, setPopUp] = useState(false);
    const [divData, setDivData] = useState([]);
    const [islogin, setIslogin] = useState(JSON.parse(localStorage.getItem("login")) || false);
    const [userId  , setUserId] = useState(JSON.parse(localStorage.getItem("userId"))) ; 
    const navigation = useNavigate();
    

//     useEffect(() => {
//         const data = JSON.parse(localStorage.getItem("data"));
//         if (data) {
//             setDivData(data);
//         }
//     }, []);

    useEffect(() => {
       
    }, [islogin]);

    useEffect(()=>{
      if(userId === null){
          console.log("invalid user id") ;
          return ;
      }  

      async function fetchData(){
          try{
             const dataResponse = await axios.get(`http://localhost:5000/user/${userId}`) ;
             console.log(dataResponse.data) ;
             setDivData(dataResponse.data) ;

          }catch(error){
          console.log("couldn't get the data from db") ;
          }
      }
     fetchData() ;
       
    } , [userId]) ;

    const logOut = () => {
        localStorage.setItem("login", JSON.stringify(false));
        localStorage.setItem("email" , JSON.stringify(null)) ;
        localStorage.setItem("userId" , JSON.stringify(null)) ;
        setIslogin(false); // Update React state to trigger re-render
    };

    const addPartBtnClick = () => {
        if(islogin){
          navigation("/popup");
        }
       else{
          alert("please login") ;
       }
        
    };

    return (
        <> 
           <div className='container'>
               {/* navbar here */}
               <div className='navbar'>
                     <div className='navbar-logo'>
                          <img src='../images/img2.png' className='navbar-logo-img'  />
                          <span className='navbar-logo-text'>TrackHere</span>
                     </div>
                     <div className='navbar-links'>
                          <Link to="/" className="navbar-links-a">Home</Link>                            
                          <a href='https://github.com/ABHI2ME/Expense-Tracker' target='_blank'  rel="noopener noreferrer" className='navbar-links-a'>About</a>
                          {islogin ? (
                                   <div>
                                        <button onClick={logOut} className='navbar-links-logout'>Logout</button>
                                   </div>
                                   ) : (
                                   <>
                                        <button onClick={() => navigation("/login")} className='navbar-links-login'>Login</button>
                                        <button onClick={() => navigation("/register")} className='navbar-links-signup'>Sign up</button>
                                   </>
                         )}
                     </div>
               </div>
               {/* add part here  */}
               <div className='add-part'>
                     <div className='add-part-box'>
                           <span className='add-part-text'>Add new expense</span>
                           <button className='add-part-btn' onClick={addPartBtnClick}><FiPlus className='add-part-btn-i'/></button>
                      </div>
               </div>
               {/* user details divs  */}
               {islogin ? (
                         <div className='expense-div-continer'>
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
                                  ) : <h1 className='empty-list'>Add to your List</h1>}
                         </div>
                         ) : 
                         <>
                           <h1 className='logout-display' style={{textAlign:"center", marginTop: "1rem"}} >Welcome</h1>
                         </>
               }
           </div>
        </>
    );
}

export default Expense;
