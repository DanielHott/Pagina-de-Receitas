/* eslint-disable no-sequences */
import React, { useContext, useState } from "react";
import ContextoReceitas from "../contexto/Consumidor";
import chefe from "./chefe.png"

export default function Header() {
    const { setTipoDaPesquisa } = useContext(ContextoReceitas);
    const [ entrada, setEntrada ] = useState({});
    return(
    <div className="fullHeader">
        <div className="header">
        <img src={chefe} alt="chefe" width="120"/>
        <h1>Receitas do Mundo</h1>
        <p>Pesquise as melhores receitas da internet aqui!</p>
        </div>
        <form onSubmit={(e) => (e.preventDefault(), setTipoDaPesquisa(entrada))}>
        <span>Pesquisar por:</span>
        <label>
          <input type="radio" name="search" value="Prato" onChange={(e) => setEntrada({...entrada, tipo: e.target.value })}/>
          Prato
        </label>
        <label>
          <input type="radio" name="search" value="Ingrediente" onChange={(e) => setEntrada({...entrada, tipo: e.target.value })}/>
          Ingrediente
        </label>
      <input type="text" placeholder="Pesquise seu prato" onChange={(e) => setEntrada({...entrada, valor: e.target.value })}/>
      <input type="submit" value="Pesquisar" />
      </form>
    </div>
    )
}