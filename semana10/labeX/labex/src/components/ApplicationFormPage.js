import React from 'react';
import { useHistory } from "react-router";

const ApplicationFormPage = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.replace("/");
      };


return (
    <div>
      <p>Formulário de inscrição</p>
      <button onClick={goToHomePage}>Home</button>
    </div>
  );
}

export default ApplicationFormPage;