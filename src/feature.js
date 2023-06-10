import React from 'react';
import './feature.css';

const Feature = () => {
  return (
    <div className="feature-section">
        <img src={process.env.PUBLIC_URL + '/images/metaverse.gif'} alt="GIF" />
      <div className="album">
        <div className="row">
         
          <img src="ruta_imagen_2.jpg" alt="Imagen 2" />
          <img src="ruta_imagen_3.jpg" alt="Imagen 3" />
          <img src="ruta_imagen_4.jpg" alt="Imagen 4" />
        </div>
        <div className="row">
          <img src="boton-play.png" alt="Imagen 5" />
          <img src="ruta_imagen_6.jpg" alt="Imagen 6" />
          <img src="ruta_imagen_7.jpg" alt="Imagen 7" />
          <img src="ruta_imagen_8.jpg" alt="Imagen 8" />
        </div>
      </div>
      </div>
  );
};

export default Feature;

