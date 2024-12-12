// Arquivo JavaScript (Footer.js)
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Descrição da Empresa */}
        <div className="footer-section">
          <h3 className="footer-title">Sobre Nós</h3>
          <p className="footer-description">
            O restaurante Bucho Cheio é referência em culinária regional,
            oferecendo pratos tradicionais, frescos e sabores únicos. Desde
            2010, unimos qualidade, tradição e atendimento de excelência para
            satisfazer e encantar nossos clientes, proporcionando uma
            experiência gastronômica inesquecível.
          </p>
        </div>

        {/* Endereço */}
        <div className="footer-section">
          <h3 className="footer-title">Endereço</h3>
          <p className="footer-text">Rua Sabores, 456</p>
          <p className="footer-text">Bairro Delícia, Recife - PE</p>
          <p className="footer-text">CEP: 54321-000</p>
        </div>

        {/* Contatos */}
        <div className="footer-section">
          <h3 className="footer-title">Contatos</h3>
          <p className="footer-text">Telefone: (81) 9876-5432</p>
          <p className="footer-text">WhatsApp: (81) 91234-5678</p>
          <p className="footer-text">Email: contato@buchocheio.com.br</p>
        </div>
      </div>

      {/* Redes Sociais */}
      <div className="footer-social">
        <p className="footer-text">
          <a
            href="https://www.facebook.com/buchocheio"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Facebook
          </a>{' '}
          |{' '}
          <a
            href="https://www.instagram.com/buchocheio"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Instagram
          </a>{' '}
          |{' '}
          <a
            href="https://www.twitter.com/buchocheio"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Twitter
          </a>
        </p>
      </div>

      {/* Direitos Autorais */}
      <div className="footer-copyright">
        <p className="footer-text">
          &copy; 2024 Restaurante Bucho Cheio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;