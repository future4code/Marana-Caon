import React from 'react';
import { useHistory } from "react-router";
import Header from "./Header"
import styled from "styled-components"

const WelcomeText = styled.p`
    color: white;
`
const PageContainer = styled.div`
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
    text-align: center;
`
const Button = styled.button `
    display: flex;
    width: 100px;
    align-self: center;
    justify-content: center;
    padding: 10px;
    border-radius: 15px;
    border: none;

    :hover {
        border: 2px solid #C016A8;
    }

    :active {
        border: none;
    }
`

const HomePage = () => {
    const history = useHistory();

    const goToApplicationFormPage = () => {
        history.push("/formulario-inscricao");
  };

return (
    <PageContainer>
        <Header />
        <BodyContainer>
            <WelcomeText>Bem-vindo(a) ao programa de viagens espaciais LabeX!</WelcomeText>
            <Button onClick={goToApplicationFormPage}>
                Inscrição
            </Button>
        </BodyContainer>
    </PageContainer>
  );
}

export default HomePage;