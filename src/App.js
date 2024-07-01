import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Cards from './Pages/Pagecard/Cards';
import './App.css'
const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
