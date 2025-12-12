import React from 'react';
import './footer.css'; // Crearemos este archivo CSS en el siguiente paso
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { HiCodeBracket } from "react-icons/hi2"; // Un icono de logo genérico

const Footer = () => {
  return (
    
    <footer id="contacto" className="footer-container">
      <div className="footer-content">
        
        {/* COLUMNA IZQUIERDA: Marca y Copyright */}
        <div className="footer-left">
          <div className="footer-logo">
            <HiCodeBracket className="logo-icon" />
            <span className="logo-text">Armando Ambrosio</span>
          </div>
          <p className="copyright">
            &copy; Copyright 2025 | Armando Ambrosio
          </p>
        </div>

        {/* COLUMNA DERECHA: Contacto y Redes */}
        <div className="footer-right">
          <h3 className="contact-title">Contacto</h3>
          
          <div className="contact-item">
            <MdEmail className="contact-icon-small" />
            <a href="mailto:jesuarman74@gmail.com" className="contact-link">
              jesuarman74@gmail.com
            </a>
          </div>

          <div className="social-icons">
            {/* WhatsApp: Formato internacional para México (52) */}
            <a 
              href="https://wa.me/5215536461324" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn whatsapp"
            >
              <FaWhatsapp />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/jesu_arman/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn instagram"
            >
              <FaInstagram />
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/jesuarman02" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn github"
            >
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;