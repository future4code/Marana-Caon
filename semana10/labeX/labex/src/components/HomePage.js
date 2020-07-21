import React from 'react';
import { useHistory } from "react-router";
import Header from "./Header"
import Button from '@material-ui/core/Button';
import styled from "styled-components"

const WelcomeText = styled.p`
    color: white;
`
const HomeContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`

const BodyContainer = styled.div`
    display: flex;
    height: 80vh;
    width: 100%;
    flex-direction: column;
    justify-content: center;
`

const HomePage = () => {
    const history = useHistory();

    const goToApplicationFormPage = () => {
        history.push("/formulario-inscricao");
  };

return (
    <HomeContainer>
        <Header />
        <BodyContainer>
            <WelcomeText>Bem-vindo(a) ao programa de viagens espaciais LabeX!</WelcomeText>
            {/* <button onClick={goToApplicationFormPage}>Inscrição</button> */}
            <Button onClick={goToApplicationFormPage} variant="contained">
                Inscrição
            </Button>
        </BodyContainer>
    </HomeContainer>
  );
}

export default HomePage;