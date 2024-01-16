import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
//import Navbar from './Components/Navbar/navbar';
import AdminPanel from './Pages/AdminPage/AdminPanel';
import NotesPanel from './Pages/NotesPanel';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NotesPanel/>}/>
          <Route path='/admin/panel' element={<AdminPanel/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
