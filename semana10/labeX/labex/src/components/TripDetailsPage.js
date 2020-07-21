import React from 'react';
import { useParams, useHistory } from "react-router";
import Header from "./Header"

const TripDetailsPage = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.replace("/");
      };

    const goToLoginPage = () => {
      history.replace("/login");
      };


return (
    <div>
      <Header />
      <p>Detalhes das viagens</p>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToLoginPage}>Login</button>
    </div>
  );
}

export default TripDetailsPage;