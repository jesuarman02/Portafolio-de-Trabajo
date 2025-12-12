import React from 'react';
import './Frameworks.css';
import { HiMiniArrowDownTray } from "react-icons/hi2";

import computerBg from '../assets/img/computer.jpg';
import reactIcon from '../assets/img/react.png';
import bootstrapIcon from '../assets/img/bootstrap.png';

const Frameworks = () => {

const handleScrollToBD = () => {
        const bdSection = document.getElementById('bd');
        if (bdSection) {
            bdSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const frameworks = [
        { name: 'React JS', img: reactIcon, desc: 'Biblioteca para interfaces de usuario' },
        { name: 'Bootstrap', img: bootstrapIcon, desc: 'Framework CSS para diseño rápido' },
    ];

    return (
        <section 
            id="frameworks" 
            className="fw-container"
            style={{ backgroundImage: `url(${computerBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="fw-overlay"></div>

            <div className="fw-content">
                <h2 className="fw-title">Frameworks & Librerías</h2>

                <div className="fw-grid">
                    {frameworks.map((fw, index) => (
                        <div className="fw-card" key={index}>
                            <div className="fw-icon-box">
                                <img src={fw.img} alt={fw.name} className="fw-img" />
                            </div>
                            <h3 className="fw-name">{fw.name}</h3>
                            <p className="fw-desc">{fw.desc}</p>
                        </div>
                    ))}
                </div>

<div className="fw-icon-wrapper" onClick={handleScrollToBD}>
                <HiMiniArrowDownTray className="fw-arrow-icon" />
            </div>
            </div>
        </section>
    );
};

export default Frameworks;