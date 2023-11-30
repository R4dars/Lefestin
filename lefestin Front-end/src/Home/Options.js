import React, { useState } from 'react';
import Barranavigate from '../components/BarraNavigate';
import Footer from '../components/Footer';
import './options.css';



function Options() {

  const [temaEscuro, setTemaEscuro] = useState(false);

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
    // Adicionar lógica adicional para alterar o tema na sua aplicação
  };

  const redefinirConfiguracoes = () => {
    // Adicionar lógica para redefinir as configurações conforme necessário
    console.log('Configurações redefinidas.');
  };

  return (
    <div className='tudo1'>
        <Barranavigate/>
        <div className={`configuracoes ${temaEscuro ? 'tema-escuro' : ''}`}>
          <h1>Configurações</h1>
          <div className="opcao-configuracao">
            <p>Ativar Tema Escuro</p>
            <label className="switch">
              <input type="checkbox" checked={temaEscuro} onChange={alternarTema} />
              <span className="slider"></span>
            </label>
          </div>
          <div className="opcao-configuracao">
            <button onClick={redefinirConfiguracoes}>Redefinir Configurações</button>
          </div>
        </div>
        <Footer/>
    </div>
  );
}


export default Options;
