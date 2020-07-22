import React from 'react';
import { useHistory } from "react-router";
import Header from "./Header"
import styled from "styled-components"

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
`

const AdminPage = () => {
    const history = useHistory();

    const goToCreateTripPage = () => {
      history.push("/viagens/criar");
    };

    const goToListTripsPage = () => {
      history.push("/viagens/lista");
    };

    const goToTripDetailsPage = () => {
      history.push("/viagens/detalhes");
    };


return (
    <PageContainer>
      <Header />
      <BodyContainer>
      <h1>Admin</h1>
      <Button onClick={goToCreateTripPage}>Criar viagem</Button>
      <Button onClick={goToListTripsPage}>Viagens</Button>
      <Button onClick={goToTripDetailsPage}>Detalhes</Button>
      </BodyContainer>
    </PageContainer>
  );
}

export default AdminPage;