import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Menu.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu">
      {/* Botão para abrir/fechar o menu no mobile */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Ícone de hambúrguer */}
      </button>

      {/* Menu de navegação */}
      <ul className={`menu-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/contact">Contatos</Link></li>
      </ul>

      <section className="search-section">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Busque receitas por nome ou ingrediente..."
          className="search-input"
        />
      </section>
    </nav>
 
  );
};

export default Menu;
