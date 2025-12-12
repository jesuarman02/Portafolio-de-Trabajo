import React from 'react';
// IMPORTA TUS SECCIONES AQUÍ
import Inicio from './Inicio.jsx';
import About from './About.jsx';
import Lenguajes from './Lenguajes.jsx';
import Tecnologias from './Tecnologias.jsx'; 
import Frameworks from './Frameworks.jsx'; 
import BD from './BD.jsx'; 
import Sistemas from './Sistemas.jsx'; 
import Proyectos from './Proyectos.jsx'; 
import Footer from '../components/footer.jsx';

const HomeSections = () => {
  return (
    // ESTE ES EL CONTENEDOR PRINCIPAL DEL SCROLL SNAP
    <main className="main-scroll-snap-container">
      {/* 1. SECCIÓN INICIO */}
      <Inicio /> 
      
      {/* 2. SECCIÓN ACERCA DE MÍ */}
      <About /> 
      <Lenguajes />
      <Tecnologias />
      <Frameworks />
      <BD />
      <Sistemas />
      <section id="proyectos" className="proyectos-section">
        <Proyectos />
      </section>

      {/* EL FOOTER VA AQUÍ, AL FINAL DE TODO */}
      <Footer />
      
      {/* ...aquí irían las demás secciones: Contacto, etc. */}
    </main>
  );
};

export default HomeSections;