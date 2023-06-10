import React from 'react';
import './FirstComponent.css';
import video from './my-video.mp4';

const FirstComponent = () => {
  return (
    <div className="first-component">
      <video className="first-component-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="first-component-content">
        <h2 className="first-component-title">Complete your NFT album</h2>
        <div className="first-component-connect">
          <span>Connect your wallet</span>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;

