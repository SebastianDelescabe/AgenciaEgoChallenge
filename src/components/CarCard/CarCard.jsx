import React, { memo, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { buttonDetail } from '../../assets';
import { CarsContext } from '../../helpers';
import './CarCard.css';


const CarCard = memo(({ data }) => {
    const [mouseIn, setMouseIn] = useState(false)

    const { setActive } = useContext(CarsContext)

    return (
        <div className='car__container'>
            <div onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)} className="car__container-body">
                {
                    mouseIn ?
                        <span className="car__title" style={{ color: '#eb0a1e' }}>{data.name}</span>
                        :
                        <span className="car__title">{data.name}</span>
                }
                <span> {data.year} | {data.price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 })}</span>
                <img className='car__image' src={data.thumbnail} alt="Not Found" />
                {
                    mouseIn &&
                    <NavLink to={`/detalle/${data.id}`}>
                        <img className='car__buttonDetail animate__animated animate__fadeIn' src={buttonDetail} alt="buttonDetail" onClick={() => setActive('detail')} />
                    </NavLink>
                }
            </div>
        </div>
    )
})

export default CarCard