import React from 'react';
import './album.css';

const Album = () => {
  return (
    <div className="album">
      <h2>cryptocurrencies</h2>
      <div className="image-container">
        <img src="/images/bitcoin-logo.png" alt="Imagen 1" className="album-image" />
        <img src="/images/Ethereum-Logo.png" alt="Imagen 2" className="album-image" />
        <img src="/images/tether-logo.jpg" alt="Imagen 3" className="album-image" />
        {/* Agrega más imágenes según tus necesidades */}
      </div>
    </div>
  );
};

export default Album;
