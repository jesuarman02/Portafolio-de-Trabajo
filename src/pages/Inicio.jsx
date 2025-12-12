import React from 'react';
import './Inicio.css'; // Importamos los estilos
import { HiMiniArrowDownTray } from "react-icons/hi2"; // Importamos el icono
import fondoImg from '../assets/img/fondo.jpg'; // Importamos la imagen

const Inicio = () => {

  // Función para bajar suavemente a la sección "About"
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
      {/* Capa oscura para legibilidad */}
      <div className="overlay"></div>

      {/* Contenido centrado */}
      <div className="content">
        <h1 className="titulo-nombre">
          Hola. Soy Armando
        </h1>
        
        <p className="subtitulo">
          Descubre mis proyectos de sistemas computacionales
        </p>

        {/* Icono con la función de click agregada */}
        <div className="icono-wrapper" onClick={handleScrollToAbout}>
            <HiMiniArrowDownTray className="icono-bajar" />
        </div>
      </div>
    </section>
  );
};

export default Inicio;