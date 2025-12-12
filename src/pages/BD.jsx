import React from 'react';
import './BD.css';
import { HiMiniArrowDownTray } from "react-icons/hi2";

import codingBg from '../assets/img/coding.jpg';
import sqlIcon from '../assets/img/sql.png';
import mongoIcon from '../assets/img/mongo.png';

const BD = () => {

    const handleScrollToSistemas = () => {
        const nextSection = document.getElementById('sistemas');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const databases = [
        { name: 'SQL', img: sqlIcon, desc: 'Bases de datos Relacionales' },
        { name: 'MongoDB', img: mongoIcon, desc: 'Bases de datos NoSQL' },
    ];

    return (
        <section 
            id="bd" 
            className="bd-container"
            style={{ backgroundImage: `url(${codingBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="bd-overlay"></div>

            <div className="bd-content">
                <h2 className="bd-title">Bases de Datos</h2>

                <div className="bd-grid">
                    {databases.map((db, index) => (
                        <div className="bd-card" key={index}>
                            <div className="scan-line"></div>
                            
                            <img src={db.img} alt={db.name} className="bd-img" />
                            <h3 className="bd-name">{db.name}</h3>
                            <p className="bd-desc">{db.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bd-icon-wrapper" onClick={handleScrollToSistemas}>
                <HiMiniArrowDownTray className="bd-arrow-icon" />
            </div>
            </div>
        </section>
    );
};

export default BD;