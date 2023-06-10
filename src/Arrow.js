import React from 'react';
import './FirstComponent.css';
import Video from './my-video.mp4';

function FirstComponent() {
  return (
    <div className="FirstComponent">
      <video className="FirstComponent-video" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="FirstComponent-content">
        <h2 className="FirstComponent-title">Complete your NFT album</h2>
        <div className="FirstComponent-connect">
          <span>Connect your wallet</span>
        </div>
      </div>
    </div>
  );
}

export default FirstComponent;
