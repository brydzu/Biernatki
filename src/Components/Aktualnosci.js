import React, { Component } from "react";
import styles from "../styles.css";
import PostData from "../Components/Aktualnosci/posty/posty.json";
//import CSSModules from "react-css-modules";

class Aktualnosci extends Component {
  render() {
    return (
      <div classname="aktualnosci-post">
        <h1 style={{ marginLeft: "80px" }}>Aktualnosci Page</h1>
        {PostData.map((PostDetail, index) => {
          return (
            <div
              classname="post"
              style={{
                borderRadius: "20px",
                borderStyle: "solid",
                color: "black",
                marginLeft: "80px",
                marginRight: "80px",
                marginTop: "5px"
              }}
            >
              <h2>{PostDetail.title}</h2>
              <h6>{PostDetail.date}</h6>
              <p>
                {PostDetail.body}
                {PostDetail.link}
              </p>
            </div>
          );
        })}
      </div>
      //</div>
    );
  }
}

export default Aktualnosci;
/*export default CSSModules(Aktualnosci, styles);*/
