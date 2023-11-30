import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import Options from './Home/Options';
import Cardapio from './Home/Cardapio';
import AboutUs from './Home/Creditos';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Cardapio" element={<Cardapio/>}/>
        <Route path="/Créditos" element={<AboutUs/>}/>
        <Route path="/Options" element={<Options/>}/>
      </Routes>
    </Router>
  );
}

// pra que serve
// tantos códigos?
// se a vida
// não é programada
// e as melhores coisas
// não tem lógica

export default App;
