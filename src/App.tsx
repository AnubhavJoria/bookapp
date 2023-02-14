import { Box } from '@mui/system';
import './App.css';
import Navbar from './components/Navbar'
import Table from './components/Table'
import { Shadows } from '@mui/material';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Add from './components/Add';
import Edit from './components/Edit';
import Delete from './components/Delete';
function App() {
  const changeVisibility = () =>{
    
  }
  return (
    <div className="App">
      <BrowserRouter>
      
        <Navbar />
       
        <Routes>
          <Route path="/" element={ <Table editing="false" delete='false' changeVisibility={changeVisibility} /> } />
          <Route path="/add" element={ <Add  /> } />
          <Route path="/edit" element={ <Edit  /> } />
          <Route path="/delete" element={ <Delete  /> } />
          
        </Routes> 

    </BrowserRouter>
 
      
   
   
    </div>
  );
}

export default App;
