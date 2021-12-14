import React, { useEffect, useState } from 'react';
import ContextoReceitas from './Consumidor';
import { RequisicaoPorId, RequisicaoPorNome, RequisicaoPrincipal } from './Serviços/Requisição';
import PropTypes from 'prop-types';

function Provedor({ children }) {
  const [resposta, setResposta] = useState([]);
  const [idIngrediente, setIdIngrediente] = useState();
  const [idResposta, setIdResposta] = useState([]);
  const [tipoDaPesquisa, setTipoDaPesquisa] = useState({tipo: '', valor: ''});
  useEffect(() => {
    if(tipoDaPesquisa.valor === '' ) {
      RequisicaoPrincipal('').then((response) => setResposta(response));
  } if(tipoDaPesquisa.tipo === 'Ingrediente') {
      RequisicaoPrincipal(tipoDaPesquisa.valor).then((response) => setResposta(response));
  } if(tipoDaPesquisa.tipo === 'Prato') {
      RequisicaoPorNome(tipoDaPesquisa.valor).then((response) => setResposta(response));
  }}, [tipoDaPesquisa])

  useEffect(() => {
    RequisicaoPorId(idIngrediente).then((response) => setIdResposta(response));
  }, [idIngrediente]);

return (
    <ContextoReceitas.Provider
      value={ { resposta, setIdIngrediente, setTipoDaPesquisa, tipoDaPesquisa, idResposta }}
    >
      { children }
    </ContextoReceitas.Provider>
  );
}

Provedor.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provedor;