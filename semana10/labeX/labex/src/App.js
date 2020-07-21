import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./components/HomePage";
import ApplicationFormPage from "./components/ApplicationFormPage";
import LoginPage from "./components/LoginPage";
import CreateTripPage from "./components/CreateTripPage";
import ListTripsPage from "./components/ListTripsPage";
import TripDetailsPage from "./components/TripDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/formulario-inscricao">
          <ApplicationFormPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/viagens/criar">
          <CreateTripPage />
        </Route>
        <Route exact path="/viagens/lista">
          <ListTripsPage />
        </Route>
        <Route exact path="/viagens/detalhes">
          <TripDetailsPage />
        </Route>
        <Route path="/">
          <h3>Página não existe! (404)</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
