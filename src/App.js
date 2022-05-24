import React, { useEffect, useState } from 'react'
import { Home, Navbar, Detail } from './components';
import { Route, Routes } from 'react-router-dom';
import { getInfo } from './helpers/index'
import { CarsContext } from './helpers';
import './App.css';
import 'animate.css'

function App() {

  const [cars, setCars] = useState([]);
  const [isActive, setActive] = useState("models");
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    getInfo()
      .then((response) => {
        setCars(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <CarsContext.Provider value={{
      cars,
      setCars,
      isActive,
      setActive,
      setLoading,
      loading
    }}>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/detalle/:id' element={<Detail />} />
        </Routes>
      </div>
    </CarsContext.Provider>

  );
}

export default App;
