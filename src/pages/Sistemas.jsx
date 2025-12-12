import React from 'react';
import './Sistemas.css';
import { HiMiniArrowDownTray } from "react-icons/hi2";

import frameworksBg from '../assets/img/frameworks.jpg'; 
import windowsIcon from '../assets/img/windows.png';
import linuxIcon from '../assets/img/linux.png';

const Sistemas = () => {

    const handleScrollToProyectos = () => {
        const proyectosSection = document.getElementById('proyectos');
        if (proyectosSection) {
            proyectosSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const osList = [
        { 
            name: 'Windows', 
            img: windowsIcon, 
            animClass: 'slide-left' 
        },
        { 
            name: 'Linux', 
            img: linuxIcon, 
            animClass: 'slide-right' 
        },
    ];

    return (
        <section 
            id="sistemas" 
            className="os-container"
            style={{ backgroundImage: `url(${frameworksBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="os-overlay"></div>

            <div className="os-content">
                <h2 className="os-title">Sistemas Operativos</h2>
                <p className="os-subtitle">Plataformas de administración y despliegue</p>

                <div className="os-grid">
                    {osList.map((os, index) => (
                        <div className={`os-card ${os.animClass}`} key={index}>
                            <div className="os-img-container">
                                <img src={os.img} alt={os.name} className="os-img" />
                            </div>
                            <h3 className="os-name">{os.name}</h3>
                            <p className="os-desc">{os.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="os-icon-wrapper" onClick={handleScrollToProyectos}>
                    <HiMiniArrowDownTray className="os-arrow-icon" />
                </div>
            </div>
        </section>
    );
};

export default Sistemas;