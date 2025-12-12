import React, { useState, useEffect } from 'react';
import './proyecto.css';

import fondoProyectos from '../assets/img/proyectos.jpg'; 

import mf_0 from '../assets/img/Proyectos/MF.jpg';
import mf_1 from '../assets/img/Proyectos/MF1.png';
import mf_2 from '../assets/img/Proyectos/MF2.png';
import mf_3 from '../assets/img/Proyectos/MF3.jpg';

// Imágenes del Proyecto F1 
import f1_0 from '../assets/img/Proyectos/F1.jpg';
import f1_1 from '../assets/img/Proyectos/F1.1.jpg';
import f1_2 from '../assets/img/Proyectos/F1.2.jpg';
import f1_3 from '../assets/img/Proyectos/F1.3.jpg';

import r1 from '../assets/img/Proyectos/R1.png';
import r2 from '../assets/img/Proyectos/R2.png';
import r3 from '../assets/img/Proyectos/R3.png';
import r4 from '../assets/img/Proyectos/R4.png';

import d1 from '../assets/img/Proyectos/D1.png';
import d2 from '../assets/img/Proyectos/D2.png';
import d3 from '../assets/img/Proyectos/D3.png';
import d4 from '../assets/img/Proyectos/D4.png';

import i1 from '../assets/img/Proyectos/I1.png';
import i2 from '../assets/img/Proyectos/I2.png';
import i3 from '../assets/img/Proyectos/I3.png';
import i4 from '../assets/img/Proyectos/I4.png';

import s1 from '../assets/img/Proyectos/S1.png';
import s2 from '../assets/img/Proyectos/S2.png';
import s3 from '../assets/img/Proyectos/S3.png';
import s4 from '../assets/img/Proyectos/S4.png';

const projectsData = [
  {
    id: 1,
    title: "Metal Family Fan Page",
    description: "Aplicación móvil desarrollada con React Native y Expo centrada en el universo de 'Metal Family'. Permite a los usuarios explorar las bandas protagonistas, conocer los roles detallados de los personajes principales y descubrir perfiles de personajes extras. A nivel técnico, integra un CRUD completo conectado a una API externa, gestión de roles de usuario para administración de contenido y un sistema de notificaciones interactivo.",
    technologies: [
      { name: "React Native", class: "react-native" },
      { name: "Expo", class: "expo" },
      { name: "Toast (Alertas)", class: "toast" },
      { name: "MongoDB", class: "mongo" },
      { name: "API Rest", class: "api" }
    ],
    repoLink: "https://github.com/jesuarman02/App-Moviles---Aplicacion-Metal-Family.git",
    buttonLabel: "Visitar Repositorio",
images: [mf_0, mf_1, mf_2, mf_3]
  },
  {
    id: 2,
    title: "Reproductor de Formula 1",
    description: "Visualizador interactivo multimedia diseñado para los aficionados de la F1. Presenta un catálogo detallado de la temporada 2025, incluyendo fichas técnicas de los autos, biografías de pilotos y datos de escuderías. La aplicación destaca por su integración de recursos multimedia, permitiendo la reproducción fluida de video y audio para una experiencia inmersiva del deporte motor.",
    technologies: [
      { name: "React Native", class: "react-native" },
      { name: "Expo", class: "expo" },
      { name: "Multimedia", class: "media" },
      { name: "Gestión de Assets", class: "assets" }
    ],
    repoLink: "https://github.com/jesuarman02/App-Moviles---Aplicacion-de-Musica.git",
    buttonLabel: "Visitar Repositorio",
    images: [f1_0, f1_1, f1_2, f1_3] 
  },
  {
    id: 3,
    title: "Metal Family Web Platform",
    description: "Versión web integral de la plataforma 'Metal Family', desarrollada en ReactJS para entornos de escritorio. Ofrece una interfaz responsiva y optimizada que mantiene la sincronización de datos en tiempo real con la versión móvil. Implementa una arquitectura robusta basada en MongoDB y una API REST personalizada, permitiendo la gestión centralizada de usuarios, noticias y contenido multimedia desde el navegador.",
    technologies: [
      { name: "React JS", class: "react-native" },
      { name: "CSS3", class: "expo" },
      { name: "MongoDB", class: "mongo" },
      { name: "API Rest", class: "api" }
    ],
    repoLink: "https://noveno.codeseiryu.com.mx/Armando/login",
    buttonLabel: "Visitar Sitio Web",
images: [r1, r2, r3, r4]
  },
  {
    id: 4,
    title: "Dragon Ball: Battle Game",
    description: "Videojuego de combate estratégico por turnos inspirado en el universo de Dragon Ball. Diseñado para dos jugadores (modo local), cuenta con selección de personajes icónicos, cada uno con efectos de sonido exclusivos y mecánicas de ataque únicas. Implementa un sistema de lógica de juego para controlar turnos y daño, un marcador de victorias persistente y una interfaz visualmente rica con animaciones CSS avanzadas.",
    technologies: [
      { name: "React JS", class: "react-native" },
      { name: "CSS Animations", class: "css-adv" }, 
      { name: "Game Logic", class: "game" },        
      { name: "Sound Effects", class: "media" }     
    ],
    repoLink: "https://noveno.codeseiryu.com.mx/Armando-DragonBall/",
    buttonLabel: "Jugar Ahora",
images: [d1, d2, d3, d4]
  },
  {
    id: 5,
    title: "Infotec: AI PDF Converter",
    description: "Desarrollo profesional de alto impacto para Infotec. Sistema avanzado de conversión de documentos que integra Inteligencia Artificial para digitalizar archivos PDF a Word editable. Utiliza un pipeline robusto: extracción óptica con Tesseract OCR, seguido de limpieza semántica y corrección de texto mediante el modelo LLaMA 3. El backend en Python/Django orquesta la manipulación de imágenes (Poppler) y la generación precisa de documentos (.docx), todo envuelto en una interfaz moderna con Bootstrap y alertas dinámicas.",
    technologies: [
      { name: "Python & Django", class: "python" },
      { name: "IA LLaMA 3", class: "ai-llama" },
      { name: "Tesseract OCR", class: "ocr" },
      { name: "Bootstrap 5", class: "bootstrap" }
    ],
    repoLink: "https://github.com/jesuarman02/CONVERTIRPDF.git",
    buttonLabel: "Visitar Repositorio",
images: [i1, i2, i3, i4]
  },
  {
    id: 6,
    title: "Clínica Santa María",
    description: "Plataforma web integral para la gestión y promoción de servicios médicos. El sitio ofrece un catálogo detallado de especialidades (Pediatría, Ginecología, Medicina General) y facilita la interacción paciente-doctor mediante un sistema de citas en línea automatizado. Desarrollado con una arquitectura clásica y robusta en PHP, utiliza bases de datos relacionales MySQL para administrar la disponibilidad de horarios y vincular eficientemente a los pacientes con sus médicos tratantes.",
    technologies: [
      { name: "PHP Backend", class: "php" },
      { name: "MySQL Database", class: "mysql" },
      { name: "HTML5 / CSS3", class: "html-css" },
      { name: "Sistema de Citas", class: "game" } 
    ],
    repoLink: "https://github.com/jesuarman02/Proyecto-Final-Suits.git", 
    buttonLabel: "Ver Proyecto",
images: [s1, s2, s3, s4]  }
];

const ProjectCard = ({ project, index }) => {
  const isAlternate = index % 2 !== 0;
  
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImgIndex((prevIndex) => (prevIndex + 1) % project.images.length);
      }, 5000); 

      return () => clearInterval(interval); 
    }
  }, [project.images]);

  const handleImageClick = () => {
    if (project.images && project.images.length > 1) {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }
  };

  const currentImage = project.images && project.images.length > 0 
    ? project.images[currentImgIndex] 
    : null;

  return (
    <div 
      className={`project-card ${isAlternate ? 'alternate-layout' : ''}`}
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${fondoProyectos})`,
        animationDelay: `${index * 0.2}s` 
      }} 
    >
      <div className="project-content">
        
        <div className="text-section">
          <h2 className="project-title">{project.title}</h2>
          
          <p className="project-description">
            {project.description}
          </p>

          <div className="tech-stack">
            {project.technologies.map((tech, i) => (
              <span key={i} className={`tech-badge ${tech.class}`}>
                {tech.name}
              </span>
            ))}
          </div>

          <hr className="separator" />

          <a 
            href={project.repoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="visit-btn"
          >
            {project.buttonLabel || "Visitar Repositorio"}
          </a>
        </div>

        <div className="image-section">
          {currentImage ? (
            <div className="img-container-mobile" onClick={handleImageClick}>
              <img 
                src={currentImage} 
                alt={`${project.title} screenshot`} 
                className="project-img mobile-fit" 
              />
              
              {project.images.length > 1 && (
                <span className="img-counter">
                  {currentImgIndex + 1} / {project.images.length}
                </span>
              )}
            </div>
          ) : (
            <div className="image-placeholder">
              <p>Imagen pendiente</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

const Proyecto = () => {
  return (
    <section className="projects-section">
      <h1 className="section-title">Mis Proyectos</h1>
      
      <div className="projects-wrapper">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Proyecto;