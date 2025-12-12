import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes de estructura
import Navbar from '../components/navbar.jsx';

// Componente principal que contiene Inicio + About + Proyectos
import HomeSections from '../pages/HomeSections.jsx';

const Config = () => {
  return (
    <BrowserRouter>
      {/* Navbar visible en todas las páginas */}
      <Navbar />

      <Routes>
        {/* La ruta raíz carga el contenedor con Scroll Snap */}
        <Route path="/" element={<HomeSections />} />
        
        {/* Rutas adicionales */}
        <Route path="/contacto" element={<h1>Contacto</h1>} />
        
        {/* Ruta para errores 404 */}
        <Route path="*" element={<h1>404 - Página No Encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Config;