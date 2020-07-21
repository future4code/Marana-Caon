import React from 'react';
import './App.css';
import TelaInicial from "./components/TelaInicial.js"
import styled from "styled-components";

const ClearButton = styled.button`
	position: fixed;
	bottom: 5px;
	right: 5px;
`

function App() {
  return (
    <div className="App">
    <TelaInicial></TelaInicial>
    <ClearButton>Limpar matches!</ClearButton>
    </div>
  );
}

export default App;
