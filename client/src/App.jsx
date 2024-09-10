import React from 'react'
import Expense from "./components/Expense" ;
import Login from "./components/Login";
import Register from "./components/Register" ;
import Popup from "./components/Popup" 
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import {DetailsProvider} from "./components/Context"
import {AuthenticateProvider} from "./components/Authenticate" ;


const App = () => {
  return (
    <>
      <AuthenticateProvider>
          
           
                  <Router>
                        <Routes>
                            <Route path='/' element ={<Expense />}  />
                            <Route path='/login' element ={<Login />} />
                            <Route path='/popup' element={<Popup/>} />
                            <Route path='/register' element={<Register />} />
                        
                            
                        </Routes>
                  </Router>
           

      </AuthenticateProvider>
    </>
  )
}

export default App
