import React, { Component } from "react";
import soltys_foto from "../Assets/soltys-biernatki-2019.jpg";

class Soltys extends Component {
  render() {
    return (
      <div>
        <h1>Soltys Page</h1>
        <h2>Mamy nowego sołtysa</h2>
        <h4>
          Dnia 5 lutego 2019 wybrano nowego sołtysa. Tego dnia w Biernatkach
          odbyło się zebranie wiejskie, podczas którego wybrano sołtysa i radę
          sołecką, którzy będą pełnić swoje funkcje do 2024 roku.
        </h4>
        <p>Sołtysem wsi Biernatki został Pan Piotr Dynowski.</p>
        <img
          src={soltys_foto}
          alt="Nowy soltys wsi Biernatki wraz z radą sołecką"
        />
      </div>
    );
  }
}

export default Soltys;
