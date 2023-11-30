import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './searchBar.css';

const SearchBar = ({ onPesquisa }) => {
    const [termoPesquisa, setTermoPesquisa] = useState('');

  const handleChange = (e) => {
    setTermoPesquisa(e.target.value);
    onPesquisa(e.target.value);
  };

  const handleSearch = () => {
    onPesquisa(termoPesquisa);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar..."
        value={termoPesquisa}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
