import React from 'react';
import './Lenguajes.css'; 
import { HiMiniArrowDownTray } from "react-icons/hi2"; 

import codeBg from '../assets/img/code.jpg';
import htmlIcon from '../assets/img/html.png';
import cssIcon from '../assets/img/css.png';
import jsIcon from '../assets/img/js.png';
import phpIcon from '../assets/img/php.png';
import pythonIcon from '../assets/img/python.png';

const Lenguajes = () => {
    
    const handleScrollToTecnologias = () => {
        const techSection = document.getElementById('tecnologias');
        if (techSection) {
            techSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const technologies = [
        { name: 'HTML', img: htmlIcon },
        { name: 'CSS', img: cssIcon },
        { name: 'JavaScript', img: jsIcon },
        { name: 'PHP', img: phpIcon },
        { name: 'Python', img: pythonIcon },
    ];

    return (
        <section 
            id="lenguajes" 
            className="lenguajes-container"
            style={{ backgroundImage: `url(${codeBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="lenguajes-overlay"></div>

            <div className="lenguajes-content">
                <h2 className="lenguajes-title">Lenguajes de Programación</h2>
                <p className="lenguajes-subtitle">Lenguajes que domino para el desarrollo</p>

                <div className="slider">
                    <div className="slide-track">
                        {technologies.map((tech, index) => (
                            <div className="slide-card" key={`tech-1-${index}`}>
                                <img src={tech.img} alt={tech.name} />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                        {technologies.map((tech, index) => (
                            <div className="slide-card" key={`tech-2-${index}`}>
                                <img src={tech.img} alt={tech.name} />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lenguajes-icon-wrapper" onClick={handleScrollToTecnologias}>
                    <HiMiniArrowDownTray className="lenguajes-icon" />
                </div>

            </div>
        </section>
    );
};

export default Lenguajes;