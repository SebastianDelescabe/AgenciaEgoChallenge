import React, { useEffect, useState } from 'react'
import { colapseArrow, dropDownArrow } from '../../assets';
import { getInfo, orderCars } from '../../helpers/index'
import { CarCard, Filters } from '../index'

//import Orders from '../Orders/Orders'
import './Home.css'

const Home = () => {

  const [cars, setCars] = useState([]);
  const [menuOrder, setMenuOrder] = useState(false);

  useEffect(() => {
    getInfo()
      .then((response) => {
        setCars(response)
      })
  }, [])


  const handleOrder = async (e) => {
    const order = e.currentTarget.getAttribute('name');
    const orderedCars = await orderCars(order, cars)
    setCars(orderedCars)
    setMenuOrder(false)
  }


  return (
    <div className='home'>
      <div className='home__title'>
        <span>Descubrí todos los modelos</span>
      </div>
      <div className='home__filterOrder'>
        <Filters setCars={setCars} />
        {/* <Orders/> */}
        <div className='order'>
          <span onClick={() => setMenuOrder(true)}>Ordenar por</span>
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
                  <span onClick={(e) => handleOrder(e)} name='nothing'>Nada</span>
                  <span onClick={(e) => handleOrder(e)} name='cheapCars'>De <b> menor </b> a <b> mayor </b> precio</span>
                  <span onClick={(e) => handleOrder(e)} name='expensiveCars'>De <b> mayor </b> a <b> menor </b> precio</span>
                  <span onClick={(e) => handleOrder(e)} name='newCars'>Más <b> nuevos </b> primero</span>
                  <span onClick={(e) => handleOrder(e)} name='oldCards'>Más <b> viejos </b> primero</span>
                </div>
              </div>
            )
          }
        </div>
      </div>
      <div className='home__line' />
      <div className='home__cars'>
        {
          cars && cars.map(car => (
            <CarCard key={car.id} data={car} />
          ))
        }
      </div>
    </div>
  )
}

export default Home