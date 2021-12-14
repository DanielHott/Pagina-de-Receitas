import React from 'react';
import { Routes, MemoryRouter, Route } from 'react-router-dom';
import './App.css';
import Provedor from './contexto/Provedor';
import PaginaPrincipal from './paginas/PaginaPrincipal';
import ReceitaAtual from './paginas/ReceitaAtual';

function App() {
  return (
    <Provedor>
      <MemoryRouter>
        <Routes >
          <Route exact path="/" element={ <PaginaPrincipal  />} />
          <Route path="/receita" element={ <ReceitaAtual /> } />
        </Routes>
      </MemoryRouter>
    </Provedor>
  );
}

export default App;
