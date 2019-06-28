import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div style={{ color: "black", marginLeft: "80px" }}>
        <h1>Biernatki</h1>
        <h3>Położenie Geograficzne</h3>
        <h3>Ludzie</h3>
        <h3>Przyroda</h3>
        <h3>Kultura</h3>
        <h3>Okolice</h3>
      <div>
        <h1>About Page</h1>
        <h1>Statystycznie</h1>
        <h3>
          Wiele ciekawych danych statystycznych na temat naszej wsi mozna
          znaleźć{" "}
          <a
            href="http://www.polskawliczbach.pl/wies_Biernatki_wadroze_wielkie_dolnoslaskie"
            target="_blank"
          >
            tutaj
          </a>
        </h3>
      </div>
    );
  }
}

export default About;
