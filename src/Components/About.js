import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

class About extends Component {
  render() {
    return (
      <div style={{ color: "black", marginLeft: "80px" }}>
        <h1>Biernatki</h1>
        <h3>Położenie Geograficzne</h3>
        <p>
          Mała wieś położona w malowniczej okolicy w gminie Wądroże Wielkie,
          powiat Jaworski, województwo dolnośląskie. W latach 1975–1998
          miejscowość administracyjnie należała do województwa legnickiego.
        </p>
        <p>
          Przed 1945 r. wieś Biernatki należała do III Rzeszy i nosiła nazwę
          Berndorf. Dnia 12 listopada 1946 roku nazwa ta została oficjalnie
          zmieniona na Biernatki i niezmiennej obowiązuje do dzisiaj.
        </p>
        <h3>Ludzie</h3>
        <h3>Przyroda</h3>
        <h3>Kultura</h3>
        <h3>Okolice</h3>
      </div>
    );
  }
}

export default About;
