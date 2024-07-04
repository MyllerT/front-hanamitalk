import React from 'react';
import { Link } from 'react-router-dom';
const headerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  textAlign: 'center',
  padding: '1em 0',
  
};
const logoStyle = {
	textAlign: 'center',
	fontSize: '2.5em',
	padding: '10px'
	
  };
export default function Header() {
	return (
		<header className="header"style={headerStyle}>
			<img style={logoStyle} src="/logo.png" alt="logo" />
			<ul>
				<li>
					<Link to="/cards">Post</Link>
				</li>
				<li>
					<Link to="/">Criar</Link>
				</li>
				
			</ul>
		</header>
	);
}