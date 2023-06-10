import React from 'react';
 import './TextSection.css';
 const TextSection = () => {
 return (
 <div className="text-section">
 <div className="left-text">
 <p className="paragraph">
 Protecting species and biodiversity in Latin America is of utmost importance. This region is known for its incredible richness in unique and diverse ecosystems, housing countless species found nowhere else on Earth.
 </p>
 <p className="paragraph">
 Preserving these ecosystems and their inhabitants is essential for maintaining ecological balance, as well as ensuring the availability of vital resources and services that benefit both nature and humans.
 </p>
 <p className="paragraph">
 By safeguarding Latin America's biodiversity, we secure a sustainable future for generations to come and foster a deeper understanding of our planet's interconnectedness.
 </p>
 <div className="button-group">
 <button className="button">Get Envelope</button>
 <button className="button">Track Progress</button>
 <button className="button">Swap Your Tokens</button>
 </div>
 </div>
 <div className="right-text">
 <p className="right-paragraph">
 Let's protect the biodiversity
 </p>
 <p className="right-paragraph">
 of Latin America together.
 </p>
 <p className="right-paragraph">
 Fill this album with us.
 </p>
 </div>
 </div>
 );
 };

 export default TextSection;