import React, { Component } from "react";
import styles from "../styles.css";
//import CSSModules from "react-css-modules";

class Aktualnosci extends Component {
  render() {
    return (
      <div classname="aktualnosci-post">
        <h1 style={{ marginLeft: "80px" }}>Aktualnosci Page</h1>
        <div
          classname="post"
          style={{
            borderRadius: "20px",
            borderStyle: "solid",
            color: "black",
            marginLeft: "80px",
            marginRight: "80px",
            marginTop: "2px"
          }}
        >
          <h2>Przebudowa drogi gminnej</h2>
          <h6>15 czerwca 2019</h6>
          <p>
            Trwa przebuodwa drogi gminnej od skrzyżowania z droga krajowa do
            centralnego punktu wsi (okolice sklepu). Poniżej kilka zdjęć z
            trwającej budowy. Mieszkańcy okolicznych domów muszą uzbroić się w
            cierpliwość. Po zakończeniu inwestycji będą mogli cieszyć się
            poszerzoną drogą o równej nawierzchni. Więcej informacji można
            znaleźć{" "}
            <a
              href="http://www.wadrozewielkie.pl/remont_drogi_w_biernatkach-107085-0-p105275.html"
              target="_blank"
            >
              tutaj
            </a>
          </p>
        </div>
        <div
          classname="post"
          style={{
            borderRadius: "20px",
            borderStyle: "solid",
            color: "black",
            marginLeft: "80px",
            marginRight: "80px",
            marginTop: "2px"
          }}
        >
          <h2>Dożynki gminne</h2>
          <h6>08 września 2019</h6>
          <p>
            Reprezentacja naszej wsi uzyskała drugie miejsce w konkursie na
            najpiękniejszy wieniec dożynkowy. Więcej informacji można znaleźć{" "}
            <a
              href="http://www.wadrozewielkie.pl/remont_drogi_w_biernatkach-107085-0-p105275.html"
              target="_blank"
            >
              tutaj
            </a>
          </p>
        </div>
        <div
          classname="post"
          style={{
            borderRadius: "20px",
            borderStyle: "solid",
            color: "black",
            marginLeft: "80px",
            marginRight: "80px",
            marginTop: "2px"
          }}
        >
          <h2>Wiejska impreza dożynkowa</h2>
          <h6>14 września 2019</h6>
          <p>
            Od godziny 18:00 do białego rana mogliśmy się bawić na corocznej
            imprezie dożynkowej. Imprezę zorganizował, dzięki uprzejmości i
            hojności sponsorów (Speed Trans) nasz sołtys Piotr Dynowski.
            Frekfencja była bardzo duża. Dziękujemy wszystkim którzy pomogli nam
            w organizacji tej imprezy i cieszymy się, że wszystko tak fajnie
            wyszło. Do zobaczenia za rok!
          </p>
        </div>
        <div
          classname="post"
          style={{
            borderRadius: "20px",
            borderStyle: "solid",
            color: "black",
            marginLeft: "80px",
            marginRight: "80px",
            marginTop: "2px"
          }}
        >
          <h2>Motocyklowe Urodziny Edytki</h2>
          <h6>15 października 2019</h6>
          <p>
            Od godziny 12:00 do 15:00 zapraszamy do Biernatek wszystkich
            kochających jednoślady na Motocyklowe urodziny Edytki. Mamy cichą
            nadzieję, że będzie nas jeszcze więcej niż w zeszłym roku. Więcej
            informacji można znaleźć na naszej stronie na{" "}
            <a
              href="https://www.facebook.com/motocykloweurodzinyedytki/"
              target="_blank"
            >
              facebooku!
            </a>
            <br />
            <b>Zróbmy hałas dla Edytki!</b>
          </p>
        </div>
      </div>
    );
  }
}

export default Aktualnosci;
/*export default CSSModules(Aktualnosci, styles);*/
