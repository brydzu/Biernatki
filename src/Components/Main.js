import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./Landingpage";
import About from "./About";
import Fundusz from "./Fundusz";
import Historia from "./Historia";
import Linki from "./Linki";
import Mieszkancy from "./Mieszkancy";
import Organizacje from "./Organizacje";
import Przedsiebiorcy from "./Przedsiebiorcy";
import Soltys from "./Soltys";
import Strategia from "./Strategia";
import Home from "./Home";

const Main = () => (
  <Switch>
    <Route exact path="/Home" component={Home} />
    <Route exact path="/" component={LandingPage} />
    <Route path="/About" component={About} />
    <Route path="/Fundusz" component={Fundusz} />
    <Route path="/Soltys" component={Soltys} />
    <Route path="/Historia" component={Historia} />
    <Route path="/Strategia" component={Strategia} />
    <Route path="/Przedsiebiorcy" component={Przedsiebiorcy} />
    <Route path="/Mieszkancy" component={Mieszkancy} />
    <Route path="/Linki" component={Linki} />
    <Route path="/Organizacje" component={Organizacje} />
  </Switch>
);

export default Main;
