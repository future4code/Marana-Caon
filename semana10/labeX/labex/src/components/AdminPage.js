import React from 'react';
import { useHistory } from "react-router";
import Header from "./Header"
import styled from "styled-components"

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
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

const ButtonContainer = styled.div `
    display: flex;
    align-self: center;
`

const Title = styled.h3 `
    color: white;
`

const Button = styled.button `
    display: flex;
    width: 100px;
    align-self: center;
    justify-content: center;
    margin: 10px;
    padding: 10px;
    border-radius: 15px;
    border: none;

    :hover {
        border: 2px solid #C016A8;
    }
`

const AdminPage = () => {
    const history = useHistory();

    const goToCreateTripPage = () => {
      history.push("/admin/criar-viagens");
    };

    const goToListTripsPage = () => {
      history.push("/admin/lista-viagens");
    };

    const goToTripDetailsPage = () => {
      history.push("/admin/detalhes-viagens");
    };


return (
    <PageContainer>
      <Header />
      <BodyContainer>
        <Title>Admin</Title>
        <ButtonContainer>
          <Button onClick={goToCreateTripPage}>Criar viagem</Button>
          <Button onClick={goToListTripsPage}>Viagens</Button>
          <Button onClick={goToTripDetailsPage}>Detalhes</Button>
        </ButtonContainer>
      </BodyContainer>
    </PageContainer>
  );
}

export default AdminPage;