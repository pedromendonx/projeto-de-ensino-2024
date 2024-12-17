import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './style/Receita.css';
import frola from './img/frola.jpg';
import pizzaCaseira from './img/pizza_caseira.jpg';
import sucoDetox from './img/suco_detox.jpg';
import trigo from './img/trigo.webp';
import margarinaImg from './img/margarina.webp';
import baunilhaImg from './img/baunilha.webp';
import acucarImg from './img/acucar.webp';
import ovosImg from './img/ovo.webp';
import leiteImg from './img/leite.webp';
import pageone from './img/1.png';
import pagetwo from './img/paget.png';

function RecipeDetails() {
  const { id } = useParams();

  // Dados fictícios para demonstração
  const recipes = {
    1: {
      title: 'Pasta Frola',
      description: 'A pasta frola, mais do que uma simples sobremesa, é um símbolo da rica tradição culinária sul-americana.',
      steps: [
        'Tempo de preparo: 45min',
        '1) Misture todos os ingredientes com as pontas dos dedos até formar uma massa lisa.',
        '2) Divida em 2 e com a ajuda de um plástico abra uma das partes e forre uma forma média.',
        '3) Coloque o recheio e com o restante da massa faça tiras em diagonais intercalando-as.',
        '4) Leve ao forno médio por 25 minutos, ou até dourar.',
      ],
      images: [frola, pageone, pagetwo], // Lista de imagens para o carrossel
      ing: [
        { name: '4 xícaras de trigo', image: trigo },
        { name: '4 colheres de sopa de margarina sem sal', image: margarinaImg },
        { name: '1 colher de café de baunilha', image: baunilhaImg },
        { name: '1 e 1/2 xícaras de açúcar', image: acucarImg },
        { name: '2 ovos', image: ovosImg },
        { name: 'Leite para dar o ponto', image: leiteImg },
      ],
    },
    2: {
      title: 'Pizza Caseira',
      description: 'Pizza italiana caseira com tomate e manjericão.',
      steps: ['Prepare a massa', 'Espalhe o molho', 'Asse no forno por 15 minutos'],
      images: [pizzaCaseira, frola, sucoDetox], // Lista de imagens para o carrossel
    },
    3: {
      title: 'Suco Detox',
      description: 'Um suco saudável feito com abacaxi e gengibre.',
      steps: ['Misture os ingredientes no liquidificador', 'Coe, se necessário', 'Sirva gelado'],
      images: [sucoDetox, pizzaCaseira, frola], // Lista de imagens para o carrossel
    },
  };

  const recipe = recipes[id];

  if (!recipe) {
    return <h2>Receita não encontrada!</h2>;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false); // Controle da transição de fade

  const nextImage = () => {
    setFade(false); // Inicia a transição de fade
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % recipe.images.length);
      setFade(true); // Habilita a visibilidade da nova imagem
    }, 500); // Aguarda 500ms para completar a transição
  };

  const prevImage = () => {
    setFade(false); // Inicia a transição de fade
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + recipe.images.length) % recipe.images.length);
      setFade(true); // Habilita a visibilidade da nova imagem
    }, 500); // Aguarda 500ms para completar a transição
  };

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <br />
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevImage}>
          &#8249;
        </button>
        <div className="image-wrapper">
          <img
            src={recipe.images[currentImageIndex]}
            alt={recipe.title}
            className={`main-image ${fade ? 'visible' : ''}`}
          />
        </div>
        <button className="carousel-button next" onClick={nextImage}>
          &#8250;
        </button>
      </div>
      <p>{recipe.description}</p>
      <br />
      <h2>Ingredientes:</h2>
      <ul>
        {recipe.ing.map((ingredient, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={ingredient.image}
              alt={ingredient.name}
              style={{ width: '30px', height: '30px', marginRight: '10px', alignItems: 'left' }}
            />
            <span>{ingredient.name}</span>
          </li>
        ))}
      </ul>
      <br />
      <h2>Modo de Preparo</h2>
      <ul>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;
