
import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import CodeforInterview from './components/CodeforInterview';
import Navbar from './components/Navbar';
import Edituser from './components/Edituser';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import View from './components/View';

function App() {
  return (
    <BrowserRouter>
      
      <Navbar/>
     <Routes>
    
      <Route path='/' element={ <CodeforInterview/>}/>
     <Route path='allusers' element={<AllUsers/>}/>
    <Route path='adduser' element={<AddUser/>}/>
    <Route path='/edit/:id' element={<Edituser/>}/>
    <Route path='/view/:id' element={<View/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
