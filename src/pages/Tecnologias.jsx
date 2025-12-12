import React from 'react';
import './Tecnologias.css';
import { HiMiniArrowDownTray } from "react-icons/hi2";

import laptopBg from '../assets/img/laptop.jpg';
import gitIcon from '../assets/img/git.png';
import githubIcon from '../assets/img/github.png';
import npmIcon from '../assets/img/npm.png';

const Tecnologias = () => {

const handleScrollToFrameworks = () => {
        const nextSection = document.getElementById('frameworks');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const tools = [
        { name: 'Git', img: gitIcon },
        { name: 'GitHub', img: githubIcon },
        { name: 'NPM', img: npmIcon },
    ];

    return (
        <section 
            id="tecnologias" 
            className="tech-container"
            style={{ backgroundImage: `url(${laptopBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="tech-overlay"></div>

            <div className="tech-content">
                <h2 className="tech-title">Control y Gestión</h2>
                <p className="tech-subtitle">Herramientas para el flujo de trabajo y versionado</p>

                <div className="tech-grid">
                    {tools.map((tool, index) => (
                        <div className="tech-card" key={index}>
                            <div className="icon-box">
                                <img src={tool.img} alt={tool.name} className="rotating-icon" />
                            </div>
                            <span className="tech-name">{tool.name}</span>
                        </div>
                    ))}
                </div>

            <div className="tech-icon-wrapper" onClick={handleScrollToFrameworks}>
                <HiMiniArrowDownTray className="tech-arrow-icon" />
            </div>
            </div>
        </section>
    );
};

export default Tecnologias;