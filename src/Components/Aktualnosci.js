import React, { Component } from "react";

class Aktualnosci extends Component {
  render() {
    return (
      <div>
        <h1>Aktualnosci Page</h1>
        <h2>Przebudowa drogi gminnej</h2>
        <p>
          Trwa przebuodwa drogi gminnej od skrzyżowania z droga krajowa do
          centralnego punktu wsi (okolice sklepu). Poniżej kilka zdjęć z
          trwającej budowy. Mieszkańcy okolicznych domów muszą uzbroić się w
          cierpliwość. Po zakończeniu inwestycji będą mogli cieszyć się
          poszerzoną drogą o równej nawierzchni.
        </p>
        <div
          style={{
            height: "600px",
            width: "1424px",
            backgroundPosition: "center",
            opacity: "1",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: 'url("./assets/IG background.jpg")'
          }}
        />
      </div>
    );
  }
}

export default Aktualnosci;
