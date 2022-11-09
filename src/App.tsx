import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import User from './Pages/User';
import Admin from './Pages/Admin';
import Cart from './components/cart';




function App() {
  return (
    
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/cart/:id' element={<Cart />} /> 
          
        </Routes>

      </div>
    </BrowserRouter>
    
    
    
  );
}

export default App;
