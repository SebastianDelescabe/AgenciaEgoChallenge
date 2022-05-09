import React, { useContext, useState } from 'react'
import { colapseArrow, dropDownArrow } from '../../assets';
import { CarCard, Filters } from '../index'
import { CarsContext, orderCars } from '../../helpers';

import './Home.css'

const Home = () => {

  const { cars, setCars } = useContext(CarsContext)

  // ****Orders****
  const [menuOrder, setMenuOrder] = useState(false);

  const handleOrder = async (e) => {
    const order = e.currentTarget.getAttribute('name');
    const orderedCars = await orderCars(order, cars)
    setMenuOrder(false)
    setCars(orderedCars)
  }
  // ----------

  return (
    <div className='home animate__animated animate__fadeIn'>
      <div className='home__title'>
        <span>Descubrí todos los modelos</span>
      </div>
      <div className='home__filterOrder'>
        <Filters />
        {/* // ****Orders**** */}

        <div className='order'>
          <span onClick={() => setMenuOrder(!menuOrder)}>Ordenar por</span>
          {
            !menuOrder ?
              <img onClick={() => setMenuOrder(true)} src={dropDownArrow} alt="dropDownArrow" />
              :
              <img onClick={() => setMenuOrder(false)} src={colapseArrow} alt="colapseArrow" />
          }
          {
            menuOrder && (
              <div>
                <div className='order__container'>
                  <span onClick={handleOrder} name='nothing'>Nada</span>
                  <span onClick={handleOrder} name='cheapCars'>De <b> menor </b> a <b> mayor </b> precio</span>
                  <span onClick={handleOrder} name='expensiveCars'>De <b> mayor </b> a <b> menor </b> precio</span>
                  <span onClick={handleOrder} name='newCars'>Más <b> nuevos </b> primero</span>
                  <span onClick={handleOrder} name='oldCards'>Más <b> viejos </b> primero</span>
                </div>
              </div>
            )
          }
        </div>
        {/* // ---------- */}
      </div>
      <div className='home__line' />
      <div className='home__cars'>
        {
          cars.map(car => (
            <CarCard key={car.id} data={car} />
          ))
        }
      </div>
    </div>
  )
}

export default Home