import React, { Component } from "react";
import "../Styles/Naglowek.css";
import logo_Gminy from "../Assets/gmina_WW.png";

class Naglowek extends Component {
  render() {
    return (
      <div className="Naglowek">
        <div>
          <img className="herbGminy" src={logo_Gminy} style={{ alignItems: "rigth" }}/>
        </div>
        <div className="textNaglowek">
          <h4>Biernatki (gm. Wądroże Wielkie)</h4>
        </div>
      </div>
    );
  }
}

export default Naglowek;
