import React from 'react';
import './About.css'; 
import { HiMiniArrowDownTray } from "react-icons/hi2"; 

import desktopImg from '../assets/img/desktop.jpg'; 

const handleScrollToNextSection = () => {
    const nextSection = document.getElementById('lenguajes');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
};

const About = () => {
  return (
    <section 
      id="about" 
      className="about-container" 
      style={{ backgroundImage: `url(${desktopImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="about-overlay"></div>

      <div className="about-content">
        <h2 className="about-title">
          ¿Quién soy?
        </h2>
        
        <h1 className="about-name">
          Jesus Armando Ambrosio Garcia
        </h1>

        <h3 className="about-role">
          Estudiante de Ingeniería en Sistemas Computacionales
        </h3>

        <p className="about-bio">
          Desde que descubrí la programación, mi misión ha sido optimizar procesos y construir herramientas digitales que impacten positivamente.
        </p>

       <div className="about-icon-wrapper" onClick={handleScrollToNextSection}>
            <HiMiniArrowDownTray className="about-icon" /> 
        </div>
      </div>
    </section>
  );
};

export default About;