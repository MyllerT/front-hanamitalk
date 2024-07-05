import React from 'react';
import { Link } from 'react-router-dom';

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  margin: '1em',
  width: '300px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fundo branco com transparência
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  display: 'block',
};

const contentStyle = {
  padding: '1em',
};

const titleStyle = {
  fontSize: '1.5em',
  margin: '0.5em 0',
  color: '#333',
};

const textStyle = {
  color: '#666',
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid #eee',
  padding: '0.5em 1em',
  backgroundColor: '#000000',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#ffc0cb',
};

const Card = ({ title, content, image, publishDate, comments }) => {
  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      {image && <img src={image} alt={title} style={imageStyle} />}
      <div style={contentStyle}>
        <h2 style={titleStyle}>{title}</h2>
        <p style={textStyle}>{content}</p>
        <p style={textStyle}>
          <small>{new Date(publishDate).toLocaleDateString()}</small>
        </p>
      </div>
      <div style={footerStyle}>
        <Link to="/" style={linkStyle}>Editar</Link>
        <Link to="/" style={linkStyle}>Excluir</Link>
      </div>
    </div>
  );
};

export default Card;
