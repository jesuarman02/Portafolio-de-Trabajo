import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '../components/navbar.jsx';

import HomeSections from '../pages/HomeSections.jsx';

const Config = () => {
  return (
    <BrowserRouter basename="/PortafolioArmando">
      
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeSections />} />
        
        <Route path="/contacto" element={<h1>Contacto</h1>} />
        
        <Route path="*" element={<h1>404 - Página No Encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Config;