import React from 'react';
import './Inicio.css'; 
import { HiMiniArrowDownTray } from "react-icons/hi2"; 
import fondoImg from '../assets/img/fondo.jpg'; 

const Inicio = () => {

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="inicio-container" 
      style={{ backgroundImage: `url(${fondoImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="overlay"></div>

      <div className="content">
        <h1 className="titulo-nombre">
          Hola. Soy Armando
        </h1>
        
        <p className="subtitulo">
          Descubre mis proyectos de sistemas computacionales
        </p>

        <div className="icono-wrapper" onClick={handleScrollToAbout}>
            <HiMiniArrowDownTray className="icono-bajar" />
        </div>
      </div>
    </section>
  );
};

export default Inicio;