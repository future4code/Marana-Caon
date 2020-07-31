import React, {useState} from 'react';
import styled from 'styled-components';
import Header from './components/Header'
import Planner from './components/Planner'

const Body = styled.div `
  display: flex;
  flex-direction: column;
  font-family: 'Crafty Girls', cursive;
`

function App() {
  const novaTarefa = {
    texto: "comprar leite"
  }

  const [tarefas, setTarefas] = useState([novaTarefa]);

  const adicionarTarefa = () => {

  };

  return (
      <Body>
        <Header />
        <Planner listaDeTarefas={tarefas}/>
      </Body>
  );
}

export default App;
