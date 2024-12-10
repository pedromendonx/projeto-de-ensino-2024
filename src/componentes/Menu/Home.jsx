import React from 'react';
import './style/Home.css'; // Certifique-se de criar o arquivo CSS correspondente
import buchoLogo from './img/bucho.png';
import frola from './img/frola.jpg'
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
            <img src={frola} alt="Receita 1" />
            <h3>Pasta Frola</h3>
          </div>
          <div className="recipe-card">
            <img src="https://via.placeholder.com/150" alt="Receita 2" />
            <h3>Pizza Caseira</h3>
          </div>
          <div className="recipe-card">
            <img src="https://via.placeholder.com/150" alt="Receita 3" />
            <h3>Suco Detox</h3>
          </div>
        </div>
      </section>
    
    </div>
  );
}

export default Home;
