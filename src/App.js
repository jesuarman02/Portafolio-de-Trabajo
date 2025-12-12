import React from 'react';
// Asegúrate de que el nombre del archivo en la carpeta routes sea 'Config.jsx'
// Si le pusiste 'RoutesConfig.jsx' cambia el nombre aquí abajo.
import Config from './routes/Config.jsx'; 

function App() {
  return (
    <div className="App">
      {/* Aquí cargamos la configuración de rutas */}
      <Config />
    </div>
  );
}

export default App;