import React from 'react'
import { Home, Navbar, Detail } from './components';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'animate.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/detalle/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
