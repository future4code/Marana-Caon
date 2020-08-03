import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Planner from './components/Planner';
import axios from 'axios';

const Body = styled.div `
  display: flex;
  flex-direction: column;
  font-family: 'Crafty Girls', cursive;
`

function App() {
  const novaTarefa = {
    segunda: "",
    terça: "",
    quarta: "",
    quinta: "",
    sexta: "",
    sábado: "",
    domingo: ""
  }

  const [tarefas, setTarefas] = useState([novaTarefa]);

  const getTasks = async () => {
    const response = await axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-marana-caon')

    setTarefas(response.data)
  }

  useEffect(() => {
    getTasks()
  }, []);

  return (
      <Body>
        <Header />
        <Planner listaDeTarefas={tarefas}/>
      </Body>
  );
}

export default App;
