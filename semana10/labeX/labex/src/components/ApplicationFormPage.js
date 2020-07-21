import React from 'react';
import { useHistory } from "react-router";
import Header from "./Header"

const ApplicationFormPage = () => {
    const history = useHistory();

return (
    <div>
      <Header />  
      <p>Formulário de inscrição</p>
    </div>
  );
}

export default ApplicationFormPage;