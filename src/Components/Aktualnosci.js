import React, { Component } from "react";
import styles from "../styles.css";
import CSSModules from "react-css-modules";

class Aktualnosci extends Component {
  render() {
    return (
      <div classname="aktualnosci">
        <h1>Aktualnosci Page</h1>
        <h2>Przebudowa drogi gminnej</h2>
        <h6>15 czerwca 2019</h6>
        <p>
          Trwa przebuodwa drogi gminnej od skrzyżowania z droga krajowa do
          centralnego punktu wsi (okolice sklepu). Poniżej kilka zdjęć z
          trwającej budowy. Mieszkańcy okolicznych domów muszą uzbroić się w
          cierpliwość. Po zakończeniu inwestycji będą mogli cieszyć się
          poszerzoną drogą o równej nawierzchni. Więcej informacji można znaleźć{" "}
          <a
            href="http://www.wadrozewielkie.pl/remont_drogi_w_biernatkach-107085-0-p105275.html"
            target="_blank"
          >
            tutaj
          </a>
        </p>
      </div>
    );
  }
}

/*export default Aktualnosci;*/
export default CSSModules(Aktualnosci, styles);
