import React from 'react';
import { Link } from 'react-router-dom';
const headerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  textAlign: 'center',
  padding: '1em 0'
};
export default function Header() {
	return (
		<header className="header"style={headerStyle}>
			<img src="/logo.png" alt="logo" />
			<ul>
				<li>
					<Link to="/cards">Post</Link>
				</li>
				<li>
					<Link to="/">Criar</Link>
				</li>
				<li>
					<Link to="/">Editar</Link>
				</li>
			</ul>
		</header>
	);
}