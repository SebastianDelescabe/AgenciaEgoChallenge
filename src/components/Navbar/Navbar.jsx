import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { gray, fill } from '../../assets/index';
import logo from '../../assets/png/logo.png'
import { CarsContext } from '../../helpers';
import './Navbar.css';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const { isActive, setActive } = useContext(CarsContext)

    const changeWidth = () => {
        if (window.innerWidth <= 850) {
            setActive("")
        } else {
            setActive("models")
        }
    }

    useEffect(() => {
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    })


    return (
        <>
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <NavLink to='/' style={{ textDecoration: 'none' }}>
                        <img onClick={() => setActive("models")} src={logo} alt="app logo" />
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/' style={{ textDecoration: 'none' }} >
                        <span
                            className={` ${isActive === "models" ? 'navbar__section-active ' : 'navbar__section-models'}`}
                            onClick={() => setActive("models")}
                        >
                            Modelos</span>
                    </NavLink>
                    <NavLink to='/detalle/1' style={{ textDecoration: 'none' }} >
                        <span
                            className={`${isActive === "detail" ? 'navbar__section-active' : 'navbar__section-detail'}`}
                            onClick={() => setActive("detail")}
                        >
                            Ficha de modelo</span>
                    </NavLink>

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
                            <img onClick={() => setOpenMenu(false)} src={fill} alt="fill" />
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