import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Certifique-se de ter o pacote react-icons instalado
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Lefestin</p>
      <a href="https://github.com/R4dars/Lefestin" target="_blank" rel="noopener noreferrer">
        <FaGithub /> Repositório no GitHub
      </a>
    </footer>
  );
};

export default Footer;
