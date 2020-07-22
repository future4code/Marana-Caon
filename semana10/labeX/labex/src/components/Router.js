import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";
import ApplicationFormPage from "./ApplicationFormPage";
import LoginPage from "./LoginPage";
import AdminPage from "./AdminPage";
import CreateTripPage from "./CreateTripPage";
import ListTripsPage from "./ListTripsPage";
import TripDetailsPage from "./TripDetailsPage";

const Router = () => {
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
          <Route exact path="/admin">
            <AdminPage />
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
  
  export default Router;