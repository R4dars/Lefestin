import React from 'react';
import Barranavigate from '../components/BarraNavigate';
import Footer from '../components/Footer';
import './creditos.css'



function AboutUs() {
  return (
    <div>
        <div className='tudo1'>
        <Barranavigate/>

        <br/>
        <br/>

        <div className="credit-container">
      <h1>Créditos</h1>

      <div className="credit-item">
        <h1>Estudantes de Ciência da Computação</h1>
        <p>Somos entusiastas apaixonados por Ciência da Computação, embarcando na emocionante jornada acadêmica dessa área fascinante.</p>
        <p>Este projeto não é apenas um trabalho para alcançar uma nota; é uma expressão de nossa dedicação ao aprendizado e à aplicação prática do que aprendemos.</p>
      </div>

      <br/>
      <br/>

      <div className="credit-item">
        <h1>Sobre o Projeto</h1>
        <p>A concepção deste site foi impulsionada pela nossa paixão por criar algo único e significativo. Buscamos inspiração em cada linha de código, em cada design cuidadosamente elaborado, e em cada funcionalidade que você vê aqui.</p>
        <p>Cada detalhe foi pensado e refinado para proporcionar a você, usuário, uma experiência excepcional.</p>
      </div>

      <br/>
      <br/>

      <div className="credit-item">
        <h1>Conecte-se Conosco</h1>
        <p>Se você quiser saber mais sobre nós, ou apenas bater um papo, sinta-se à vontade para nos encontrar nas redes sociais:</p>
      </div>

      <br/>
      <br/>

        <div className="conect-us">
      <div className="credit-itens">
        <h1>João Gabriel</h1>
        <p>Programador Front-end</p>
        <br/>
        <div className="social-links">
          <a href="https://www.instagram.com/joao_gabriel.31?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/joão-gabriel-005aa0265/?originalSubdomain=br" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Joaogabriel148" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="credit-itens">
        <h1>Matheus Alexandre</h1>
        <p>Programador Back-end</p>
        <br/>
        <div className="social-links">
          <a href="https://www.instagram.com/m4th.nvm/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/usuario2" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/R4dars" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
        <Footer/>
    </div>
    </div>
  </div>
  );
}



export default AboutUs;
