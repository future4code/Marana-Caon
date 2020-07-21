import React from 'react';
import { useHistory } from "react-router";

const HomePage = () => {
    const history = useHistory();

    const goToLoginPage = () => {
        history.push("/login");
      };

    const goToApplicationFormPage = () => {
        history.push("/formulario-inscricao");
  };

return (
    <div>
      <p>Home</p>
      <button onClick={goToLoginPage}>Login</button>
      <button onClick={goToApplicationFormPage}>Inscrição</button>
    </div>
  );
}

export default HomePage;