import React from 'react';
import { useParams, useHistory } from "react-router";
import Header from "./Header"

const CreateTripPage = () => {
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
      <p>Criar viagem</p>
      <button onClick={goToHomePage}>Home</button>
      <button onClick={goToLoginPage}>Login</button>
    </div>
  );
}

export default CreateTripPage;