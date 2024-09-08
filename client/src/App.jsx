import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import './App.css';
import Expense from "./components/Expense";

function App() {
  return (
    <>
<Router> {/* Use BrowserRouter (aliased as Router) to wrap your Routes */}
      <Routes>
        <Route path="/" element={<Expense />} /> {/* Corrected `path` instead of `put` */}
      </Routes>
    </Router>

    
    </>
  );
}

export default App;
