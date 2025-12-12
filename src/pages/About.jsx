import React from 'react';
import './About.css'; // Importaremos los estilos en el siguiente paso
import { HiMiniArrowDownTray } from "react-icons/hi2"; // Reutilizamos el icono

// IMPORTANTE: Asegúrate de que la ruta sea correcta
import desktopImg from '../assets/img/desktop.jpg'; 

// Función para manejar el scroll suave (lo usaremos en el siguiente paso)
const handleScrollToNextSection = () => {
    // Busca el siguiente elemento en la página. Aquí busca la sección "proyectos"
    const nextSection = document.getElementById('lenguajes');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
};

const About = () => {
  return (
    <section 
      id="about" // ID que usaremos para navegar con el scroll
      className="about-container" 
      // Aplicamos la imagen de fondo con un estilo en línea
      style={{ backgroundImage: `url(${desktopImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Capa oscura (Overlay) para asegurar la legibilidad del texto blanco */}
      <div className="about-overlay"></div>

      {/* Contenido centrado */}
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

        {/* Icono con la función de scroll para ir a la siguiente sección */}
       <div className="about-icon-wrapper" onClick={handleScrollToNextSection}>
            <HiMiniArrowDownTray className="about-icon" /> 
        </div>
      </div>
    </section>
  );
};

export default About;