import React from 'react';
import { useParams, useHistory } from "react-router";
import Header from "./Header"

const LoginPage = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.replace("/");
      };

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
    <div>
      <Header />
      <p>Login</p>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToCreateTripPage}>Criar viagem</button>
      <button onClick={goToListTripsPage}>Viagens</button>
      <button onClick={goToTripDetailsPage}>Detalhes</button>
    </div>
  );
}

export default LoginPage;