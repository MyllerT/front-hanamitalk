import React from 'react';

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '1em',
  margin: '1em',
  width: '200px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  borderBottom: '1px solid #ccc',
  paddingBottom: '1em'
};

const Card = ({ title, content, image, publishDate }) => {
  return (
    <div style={cardStyle}>
      {image && <img src={image} alt={title} style={imageStyle} />}
      <h2>{title}</h2>
      <p>{content}</p>
      <p><small>{new Date(publishDate).toLocaleDateString()}</small></p>
    </div>
  );
};

export default Card;
