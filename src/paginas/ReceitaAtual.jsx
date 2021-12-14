import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import ContextoReceitas from '../contexto/Consumidor';
import { pegaIngrediente } from '../serviços/funções';
import pegaUrlYt from '../serviços/funções';

export default function DetalhesComidas() {
  const navigate = useNavigate();
  const { idResposta } = useContext(ContextoReceitas);
  return (
    <div className="paginaDetalhes">
      <input
      type="button"
      onClick={() => navigate('/')}
      value="Voltar"
      />
      {
        idResposta.map((elemento) => (
          <div key={ elemento.idMeal }>
            <img
              data-testid="recipe-photo"
              src={ `${elemento.strMealThumb}` }
              alt=""
              width="400"
            />
            <p data-testid="recipe-title">Receita de: {elemento.strMeal}</p>
            <p data-testid="recipe-category">Categoria: {elemento.strCategory}</p>
            <p data-testid="instructions">Instruções: {elemento.strInstructions}</p>
            <h4>Ingredientes: </h4>
            <ul>
              { pegaIngrediente(elemento).map((ingrediente) => (
                <li
                  key={ ingrediente.nome }
                  data-testid={ `${ingrediente.index}-ingredient-name-and-measure` }
                >
                  {ingrediente.nome}
                  -
                  {ingrediente.quantidade}
                </li>
              ))}
            </ul>
            <h4>Não conseguiu acompanhar as instruções? Veja o vídeo e simplifique ainda mais!</h4>
            <iframe
              data-testid="video"
              width="560"
              height="315"
              title="video"
              src={ `//www.youtube.com/embed/${pegaUrlYt(elemento.strYoutube)}` }
              frameBorder="0"
              allowFullScreen
            />
            <input
              type="button"
              data-testid="share-btn"
              value="Compartilhar"
            />
            <input
              type="button"
              data-testid="favorite-btn"
              value="Favoritar"
            />
            <input
              type="button"
              data-testid="start-recipe-btn"
              value="Iniciar Receita"
            />
          </div>
        ))
      }
    </div>
  );
}