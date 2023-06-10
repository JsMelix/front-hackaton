import React from 'react';
import './App.css';
import Header from './Header';
import TextSection from './TextSection';
import LogoSection from './LogoSection';
import './LogoSection.css';
import Feature from './feature';
import Album from './album';
import PlayButton from './PlayButton';
import Navbar from './Navbar';
import Chart from './Chart';
import SpotPopularesSection from './SpotPopularesSection';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <TextSection />
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title"></h1>
          <p style={{ fontFamily: 'Roboto bold', fontSize: '40px'}} className="hero-description">
          Únete a la comunidad más grande de criptomonedas.
          </p>
        </div>
      </section>

      <section className="feature-section">
        <div className="container">
          <div className="feature">
            <span className="feature-icon">Icon 1</span>
            <h2 className="feature-title">Get Envelope</h2>
            <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus velit sed tellus hendrerit, eget consectetur urna scelerisque.</p>
          </div>
          <Feature />
          <div className="feature">
            <span className="feature-icon">Icon 2</span>
            <h2 className="feature-title">Track Progress</h2>
            <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus velit sed tellus hendrerit, eget consectetur urna scelerisque.</p>
          </div>
          <div className="feature">
            <Album />
            <span className="feature-icon"></span>
            <PlayButton />
            <h2 className="feature-title">Swap Your Tokens</h2>
            <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus velit sed tellus hendrerit, eget consectetur urna scelerisque.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

