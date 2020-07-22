import React from 'react';
import { useHistory } from "react-router";
import Header from "./Header";
import styled from "styled-components";

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

const ApplicationFormPage = () => {
    const history = useHistory();

return (
    <PageContainer>
      <Header /> 
      <BodyContainer>
      <h1>Formulário de inscrição</h1>
      </BodyContainer> 
    </PageContainer>
  );
}

export default ApplicationFormPage;