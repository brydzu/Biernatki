import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="demo-big-content">
          <Layout>
            <Header title="Wieś Biernatki - Zapraszamy!" scroll>
              <Navigation>
                <Link to="/Home">Strona główna</Link>
                <Link to="/Aktualnosci">Aktualnosci</Link>
                <Link to="/About">About</Link>
                <Link to="/Fundusz">Fundusz</Link>
                <Link to="/Soltys">Soltys</Link>
                <Link to="/Mieszkancy">Mieszkancy</Link>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <Link to="/Home">Strona główna</Link>
                <Link to="/Aktualnosci">Aktualnosci</Link>
                <Link to="/About">About</Link>
                <Link to="/Fundusz">Fundusz</Link>
                <Link to="/Soltys">Soltys</Link>
                <Link to="/Mieszkancy">Mieszkancy</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
export default App;
