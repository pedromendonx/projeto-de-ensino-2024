import React from 'react';
import { useParams } from 'react-router-dom';
import './style/Receita.css';
import frola from './img/frola.jpg';
import pizzaCaseira from './img/pizza_caseira.jpg';
import sucoDetox from './img/suco_detox.jpg';

function RecipeDetails() {
  const { id } = useParams();

  // Dados fictícios para demonstração
  const recipes = {
    1: {
      title: 'Pasta Frola',
      description: 'Uma deliciosa sobremesa argentina feita com marmelada.',
      steps: ['Prepare a massa', 'Adicione o recheio', 'Asse no forno por 40 minutos'],
      image: frola,
    },
    2: {
      title: 'Pizza Caseira',
      description: 'Pizza italiana caseira com tomate e manjericão.',
      steps: ['Prepare a massa', 'Espalhe o molho', 'Asse no forno por 15 minutos'],
      image: pizzaCaseira,
    },
    3: {
      title: 'Suco Detox',
      description: 'Um suco saudável feito com abacaxi e gengibre.',
      steps: ['Misture os ingredientes no liquidificador', 'Coe, se necessário', 'Sirva gelado'],
      image: sucoDetox,
    },
  };

  const recipe = recipes[id];

  if (!recipe) {
    return <h2>Receita não encontrada!</h2>;
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>
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
