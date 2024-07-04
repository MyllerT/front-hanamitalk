import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  padding: '2em',
  gap: '2em',
};

const pageStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2em',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',  // Fundo branco com transparência
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '1em',
  fontSize: '2.5em',
  color: '#333',
};

const Cards = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/publish')
      .then(response => response.json())
      .then(data => setCardData(data))
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }, []);

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
            image={card.image}
            publishDate={card.publishDate}
            
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;