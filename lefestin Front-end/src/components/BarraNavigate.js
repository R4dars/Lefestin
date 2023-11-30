import React from 'react';
import { Link } from 'react-router-dom';
import './barranavigate.css';

const Barranavigate = () => {
  return (
    <div>
      <nav>
      <h2 color='white'>Le Festin</h2>
        <ul class='nav-list'>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Cardapio">Receitas</Link></li>
          <li><Link to="/Créditos">Créditos</Link></li>
          <li><Link to="/Options">Options</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Barranavigate;