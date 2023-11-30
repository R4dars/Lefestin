import React, { useState } from 'react';
import './barraPesquisa.css';

function BarraPesquisa({ onPesquisa }) {
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const handleChange = (e) => {
    setTermoPesquisa(e.target.value);
    onPesquisa(e.target.value);
  };

  return (
    <form className="barra-pesquisa">
      <input
        type="text"
        placeholder="Pesquisar..."
        value={termoPesquisa}
        onChange={handleChange}
      />
    </form>
  );
}

export default BarraPesquisa;
