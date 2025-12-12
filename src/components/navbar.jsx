import React, { useState, useEffect } from 'react';
import { HiBars3, HiXMark, HiCodeBracket } from "react-icons/hi2"; // Iconos
import './navbar.css';

const Navbar = () => {
    // Estado para el menú móvil (abierto/cerrado)
    const [click, setClick] = useState(false);
    
    // Estado para cambiar el color del navbar al hacer scroll
    const [color, setColor] = useState(false);

    // Función para manejar el clic en el icono de hamburguesa
    const handleClick = () => setClick(!click);
    
    // Función para cerrar el menú cuando se da clic en un enlace
    const closeMenu = () => setClick(false);

    // Función para detectar el scroll y cambiar el color
    const changeColor = () => {
        if (window.scrollY >= 90) { // Si baja 90px
            setColor(true);
        } else {
            setColor(false);
        }
    };

    // Activamos el "escucha" del scroll
    useEffect(() => {
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        // Si 'color' es true, agrega la clase 'header-bg' para poner fondo negro
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'>
                
                {/* LOGO */}
                <a href='#inicio' className='logo' onClick={closeMenu}>
                    <HiCodeBracket className='logo-icon'/> Portafolio
                </a>

                {/* ICONO DE HAMBURGUESA (Solo visible en móvil) */}
                <div className='hamburger' onClick={handleClick}>
                    {click ? (
                        <HiXMark size={30} style={{ color: '#ffffff' }} />
                    ) : (
                        <HiBars3 size={30} style={{ color: '#ffffff' }} />
                    )}
                </div>

                {/* MENÚ DE NAVEGACIÓN */}
                {/* Si 'click' es true, mostramos el menú lateral (nav-menu active) */}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#inicio' onClick={closeMenu}>Inicio</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>Sobre Mí</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#lenguajes' onClick={closeMenu}>Habilidades</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#proyectos' onClick={closeMenu}>Proyectos</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contacto' onClick={closeMenu}>Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;