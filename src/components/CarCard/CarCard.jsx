import React, { useState } from 'react'
import { buttonDetail } from '../../assets'
import { Link } from 'react-router-dom'
import './CarCard.css'

const CarCard = ({ data }) => {
    const [mouseIn, setMouseIn] = useState(false)

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
                    <Link to={`/detalle?id=${data.id}`}>
                        <img className='car__buttonDetail' src={buttonDetail} alt="buttonDetail" />
                    </Link>
                }

            </div>
        </div>
    )
}

export default CarCard