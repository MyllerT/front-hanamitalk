import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  padding: '1em'
};

const Cards = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api')
      .then(response => response.json())
      .then(data => setCardData(data))
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }, []);

  return (
    <div>
      <h1>Página de Cards</h1>
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