import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../componentes/Header";
import ContextoReceitas from "../contexto/Consumidor";

export default function PaginaPrincipal() {
  const { resposta, setIdIngrediente } = useContext(ContextoReceitas);
  const navigate = useNavigate();
  return (
    <div className="menuPrincipal">
      <Header />
      { resposta ? resposta.map((elemento) => {
        return (
          <card key={elemento.idMeal} className="cards" onClick={() => { navigate("/receita"); setIdIngrediente(elemento.idMeal)}}>
            <p className="textoPrato">{elemento.strMeal}</p>
            <img
              src={elemento.strMealThumb}
              alt={elemento.strMeal}
              width="160"
            />
          </card>
        );
      }) : <h4> Tentamos, mas não encontramos nada :( </h4>}
    </div>
  );
}
