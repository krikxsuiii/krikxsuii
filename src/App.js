import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Sign from './components/Sign';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Validation from './components/Validation';

function App() {
  return (
    <div className="App">
  
    {/* <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Sign />} />

      </Routes>
      </BrowserRouter> */}
      <Validation />
  </div> 
  );
}

export default App;
