import React from 'react';
import { useParams, useHistory } from "react-router";

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
      <p>Detalhes das viagens</p>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToLoginPage}>Login</button>
    </div>
  );
}

export default TripDetailsPage;