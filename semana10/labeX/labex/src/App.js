import React from 'react';
import Router from './components/Router';
import styled from "styled-components"

const AppContainer = styled.div`
  background-color: black;
`
function App() {
  return (
    <div className="App">
      <AppContainer>
        <Router />
      </AppContainer>
    </div>
  );
}

export default App;
