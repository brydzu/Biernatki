import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./Landingpage";
import About from "./About";
import Fundusz from "./Fundusz";
import Historia from "./Historia";
import Linki from "./Linki";
import Mieszkancy from "./Mieszkancy";
import Organizacje from "./Organizacje";
import Przesiebiorcy from "./Przedsiebiorcy";
import Soltys from "./Soltys";
import Strategia from "./Strategia";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/About" component={About} />
      <Route path="/Fundusz" component={Fundusz} />
      <Route path="/Soltys" component={Soltys} />
      <Route path="/Historia" component={Historia} />
    </Switch>
  </BrowserRouter>
);

export default Main;
