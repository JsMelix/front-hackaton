import React from 'react';

function Photo({ photo }) {
  return (
    <div className="Photo">
      <img src={photo.imageUrl} alt={photo.title} />
      <h2>{photo.title}</h2>
    </div>
  );
}

export default Photo;
