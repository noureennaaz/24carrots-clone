import  Navbar from './components/Navbar';
import './App.css';
import {Route, Routes} from "react-router"
import HomePage from './pages/HomePage';

function App() {
  return (
   <div>
      <Routes>
        <Route path="/" element={<HomePage/>} /> 
      </Routes>
   </div>
    
  );
}

export default App;
