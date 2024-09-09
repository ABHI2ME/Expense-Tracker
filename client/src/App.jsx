import React from 'react'
import Expense from "./components/Expense" ;
import Login from "./components/Login";
import Register from "./components/Register" ;
import Popup from "./components/Popup" 
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element ={<Expense />}  />
            <Route path='/login' element ={<Login />} />
            <Route path='/popup' element={<Popup/>} />
            <Route path='/register' element={<Register />} />
        
            
        </Routes>
      </Router>
    </>
  )
}

export default App
