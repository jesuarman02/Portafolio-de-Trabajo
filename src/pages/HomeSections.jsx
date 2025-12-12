import React from 'react';
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
    <main className="main-scroll-snap-container">
      <Inicio />       
      <About /> 
      <Lenguajes />
      <Tecnologias />
      <Frameworks />
      <BD />
      <Sistemas />
      <section id="proyectos" className="proyectos-section">
        <Proyectos />
      </section>

      <Footer />
      
    </main>
  );
};

export default HomeSections;