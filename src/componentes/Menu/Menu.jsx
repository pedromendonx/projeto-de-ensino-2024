import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Menu.css'; // Certifique-se de que o arquivo de estilos está correto

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu">
      {/* Botão para abrir/fechar o menu no mobile */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'} {/* Ícones para abrir/fechar */}
      </button>

      {/* Menu de navegação */}
      <ul className={`menu-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><Link to="/contact">Contatos</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
