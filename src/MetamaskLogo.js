import React from 'react';

const MetamaskLogo = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <span>Connect your wallet</span>
      <img
        src="/metamask-icon.png" // Ajusta la ruta de la imagen según la ubicación de tu logo de Metamask
        alt="Metamask Logo"
        style={{ width: '100px', height: '100px', marginTop: '10px' }} // Ajusta el tamaño del logo según tus necesidades
      />
    </div>
  );
};

export default MetamaskLogo;
