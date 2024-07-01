import React from 'react';

const footerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  textAlign: 'center',
  padding: '1em 0'
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2024 Meu Projeto. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
