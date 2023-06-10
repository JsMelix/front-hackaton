import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <video autoPlay muted loop className="header-video">
        <source src="/videos/my-video.mp4" type="video/mp4" />
      </video>
      <div className="header-content">
        <div className="logo">
        {
   /* <img src="images/logo.jpg" alt="Logo" /> */
}
        </div>
        <div className="text-container">
          <h1 className="title"></h1>
          <p className="subtitle"></p>
        </div>
        <div className="button-container">
          <button className="button">Button 1</button>
          <button className="button">Button 2</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
