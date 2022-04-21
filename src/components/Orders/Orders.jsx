// import React, { useState } from 'react';
// import { colapseArrow, dropDownArrow } from '../../assets';
// import { orderCars } from '../../helpers/orderCars';
// import './Orders.css';

// const Orders = ({ setCars, cars }) => {

//     const [orderFilter, setOrderFilter] = useState(false);

//     const handleOrder = async (e) => {
//         const order = e.currentTarget.getAttribute('name');
//         const carsOrdered = await orderCars(order, cars);
//         setOrderFilter(false);
//         setCars(carsOrdered);
//     }

//     return (
//         <>
//             <div className='order'>
//                 <span onClick={() => setOrderFilter(true)} className='order__title'>Ordenar por</span>
//                 {
//                     !orderFilter ?
//                         <img onClick={() => setOrderFilter(true)} src={dropDownArrow} alt="dropDownArrow" />
//                         :
//                         <img onClick={() => setOrderFilter(false)} src={colapseArrow} alt="colapseArrow" />
//                 }
//                 {
//                     orderFilter && (
//                         <div>
//                             <div className='order__container'>
//                                 <span onClick={(e) => handleOrder(e)} name='nothing'>Nada</span>
//                                 <span onClick={(e) => handleOrder(e)} name='cheapCars'>De <b> menor </b> a <b> mayor </b> precio</span>
//                                 <span onClick={(e) => handleOrder(e)} name='expensiveCars'>De <b> mayor </b> a <b> menor </b> precio</span>
//                                 <span onClick={(e) => handleOrder(e)} name='newCars'>Más <b> nuevos </b> primero</span>
//                                 <span onClick={(e) => handleOrder(e)} name='oldCards'>Más <b> viejos </b> primero</span>
//                             </div>
//                         </div>
//                     )
//                 }
//             </div>
//         </>
//     )
// }

// export default Orders