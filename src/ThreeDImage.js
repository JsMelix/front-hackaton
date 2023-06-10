import React from 'react';

const ThreeDImage = () => {
  return (
    <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}>
      <img
        src="/metamask-icon.png" // Ajusta la ruta de la imagen según la ubicación de tu imagen 3D
        alt="3D Image"
        style={{ width: '200px', height: 'auto' }} // Ajusta el tamaño de la imagen según tus necesidades
      />
    </div>
  );
};

export default ThreeDImage;
