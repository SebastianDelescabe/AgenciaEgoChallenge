import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo, gray, fill } from '../../assets/index'
import './Navbar.css'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <img src={logo} alt="app logo" />
                    </Link>
                </div>
                <div>
                    <Link to='/' style={{ textDecoration: 'none' }} >
                        <span className='navbar__section-models' >Modelos</span>
                    </Link>
                    <Link to='/detalle/1' style={{ textDecoration: 'none' }} >
                        <span className='navbar__section-detail'>Ficha de modelo</span>
                    </Link>

                </div>
                {
                    !openMenu && (
                        <div className='navbar__button'>
                            <span onClick={() => setOpenMenu(true)}>Menú</span>
                            <img onClick={() => setOpenMenu(true)} src={gray} alt="" />
                        </div>
                    )
                }
            </nav>
            {
                openMenu && (
                    <div className='navbar__menu-container'>
                        <div className='navbar__button'>
                            <span onClick={() => setOpenMenu(false)}>Cerrar</span>
                            <img className='navbar__menu-closeButton' onClick={() => setOpenMenu(false)} src={fill} alt="fill" />
                        </div>
                        <div className='navbar__menu-links'>
                            <span>Modelos</span>
                            <span>Servicios y Accesorios</span>
                            <span>Financiación</span>
                            <span>Reviews y Comunidad</span>
                            <div className='navbar__menu-path' />
                            <span>Toyota Mobility Service</span>
                            <span>Toyota Gazoo Racing</span>
                            <span>Toyota Híbridos</span>
                            <div className='navbar__menu-path' />
                            <span>Concesionarios</span>
                            <span>Test Drive</span>
                            <span>Contacto</span>
                            <br />
                            <div className='navbar__menu-links-copy'>
                                <span>Actividades</span>
                                <span>Servicios al Cliente</span>
                                <span>Ventas Especiales</span>
                                <span>Innovación</span>
                                <span>Prensa</span>
                                <span>Acerca de...</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Navbar