import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import Header from "./Header"
import styled from "styled-components"
import axios from "axios";

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

const TripDetailsPage = () => {
    const history = useHistory();

    const goToAdminPage = () => {
      history.replace("/admin");
    };

    const baseUrl =
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/marana-caon";
  
  
    useEffect(() => {
      const token = window.localStorage.getItem("token");
  
      if (token === null) {
        history.push("/");
      } else {
        getTripDetail();
      }
    }, [history]);
  
    const getTripDetail = () => {
      const token = window.localStorage.getItem("token");
  
      axios
        .get(`${baseUrl}/trip/:id`, {
          headers: {
            auth: token
          }
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.log(err.message);
        });
    };

return (
    <PageContainer>
      <Header />
      <BodyContainer>
      <h1>Detalhes das viagens</h1>
      <Button onClick={goToAdminPage}>Voltar</Button>
      </BodyContainer>
    </PageContainer>
  );
}

export default TripDetailsPage;