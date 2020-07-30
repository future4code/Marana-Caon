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

const ListTripsPage = () => {
    const history = useHistory();

    const goToAdminPage = () => {
      history.replace("/admin");
    };


return (
    <PageContainer>
      <Header />
      <BodyContainer>
      <h1>Lista de viagens</h1>
      <Button onClick={goToAdminPage}>Voltar</Button>
      </BodyContainer>
    </PageContainer>
  );
}

export default ListTripsPage;