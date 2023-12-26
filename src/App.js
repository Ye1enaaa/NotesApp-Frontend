import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
//import Navbar from './Components/Navbar/navbar';
import Login from './Pages/Login';
import AdminPanel from './Pages/AdminPage/AdminPanel';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/admin/panel' element={<AdminPanel/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
