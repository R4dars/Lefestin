import React from 'react';
import './receita.css';

function Receita({ nome, ingredientes, instrucoes }) {
  return (
    <div className="receita">
      <h3>{nome}</h3>
      <br/>
      <h3>Ingredientes</h3>
      <br/>
      <ul>
        {ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <br/>
      <h3>Instruções</h3>
      <br/>
      <p>{instrucoes}</p>
    </div>
  );
}

export default Receita;
