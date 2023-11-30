import React, { useState, useEffect } from 'react';
import './home.css'
import Barranavigate from '../components/BarraNavigate';
import Footer from '../components/Footer';

const ImageLabel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <label className="image-label">
      <img
        src={images[currentIndex]}
        alt={`Imagem ${currentIndex + 1}`}
        className="image"
      />
    </label>
  );
};


function Home() {
  const images = [
    process.env.PUBLIC_URL + '/img/Iconcafe.jpg',
    process.env.PUBLIC_URL + '/img/fundomenu1.jpg',
    process.env.PUBLIC_URL + '/img/almoco.jpg',
];

  return (
    <div className='tudo'>
        <Barranavigate/>
        <div className="app">
          <ImageLabel images={images} />
        </div>
        
        <div className='pagina-inicial'>
          <header className="header">
              <h1>Bem-vindo ao Nosso Site de Receitas</h1>
          </header>
          <section className="conteudo">
              <h3 >
                Bem-vindo ao nosso mundo culinário, onde os sabores se encontram e as experiências na cozinha se tornam inesquecíveis, 
                embarque em uma jornada gastronômica repleta de receitas deliciosas, dicas úteis e inspiração para transformar cada refeição em um momento especial.
              </h3>
          </section>
        </div>
        <Footer/>
    </div>
  );
}

export default Home;
