import React from 'react';
import './style/Home.css';
import buchoLogo from './img/bucho.png';
import frola from './img/frola.jpg';
import pizzaCaseira from './img/pizza_caseira.jpg';
import sucoDetox from './img/suco_detox.jpg';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="home">
      {/* Cabeçalho com um banner */}
      <header className="home-header">
        <img src={buchoLogo} alt="Logo do Bucho Cheio" className='logo' />
        <div className='text'>
        <h1>Bem-vindo ao Bucho Cheio!</h1>
        <p>Encontre receitas deliciosas para todas as ocasiões!</p>
        </div>
        <button className="explore-button">Explore Receitas</button>
      </header>

      {/* Seção de categorias */}
      <section className="categories">
        <h2>Categorias Populares</h2>
        <div className="category-grid">
          <div className="category-card">Sobremesas</div>
          <div className="category-card">Pratos Principais</div>
          <div className="category-card">Lanches</div>
          <div className="category-card">Bebidas</div>
        </div>
      </section>

      {/* Seção de receitas populares */}
      <section className="popular-recipes">
        <h2>Receitas Populares</h2>
        <div className="recipe-grid">
          <div className="recipe-card">
            <Link to="/recipe/1">
            <img src={frola} alt="Receita 1" />
            <h3>Pasta Frola</h3>
            </Link>
          </div>
          <div className="recipe-card">
            <Link to="/recipe/2">
            <img src={pizzaCaseira} alt="Receita 2" />
            <h3>Pizza Caseira</h3>
            </Link>
          </div>
          <div className="recipe-card">
            <Link to="/recipe/3">
            <img src={sucoDetox} alt="Receita 3" />
            <h3>Suco Detox</h3>
            </Link>
          </div>
        </div>
      </section>
    
    </div>
  );
}

export default Home;
