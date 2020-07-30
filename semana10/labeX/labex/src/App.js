import React from 'react';
import Router from './components/Router';
import styled from "styled-components"

const AppContainer = styled.div`
  background-color: #282c34;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`
function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
}

export default App;
