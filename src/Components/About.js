import React, { Component } from "react";

class About extends Component {
  render() {
    return (
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
