import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import { fetchPublish, fetchComments } from '../../Service/apiService';

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
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
    const fetchData = async () => {
      const publishData = await fetchPublish();
      const publishDataWithComments = await Promise.all(publishData.map(async (publish) => {
        const comments = await fetchComments(publish.id);
        return { ...publish, comments };
      }));
      setCardData(publishDataWithComments);
    };

    fetchData();
  }, []);

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>Publicações</h1>
      <div style={containerStyle}>
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
            image={card.image}
            publishDate={card.publishDate}
            comments={card.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
