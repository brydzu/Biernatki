import React, { Component } from "react";
import scriptLoader from "react-async-script-loader";

class Mapa extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var uluru = { lat: -25.363, lng: 131.044 };
    this.map = new google.maps.Map(this.refs.map, {
      zoom: 4,
      center: uluru
    });
  }

  render() {
    return (
      <div>
        <h3>My Google Maps Demo</h3>
        <div id="mapka" ref="mapka">
          <script>
            {function initMap() {
              var uluru = { lat: -25.363, lng: 131.044 };
              var map = new google.maps.Map(document.getElementById("mapka"), {
                zoom: 4,
                center: uluru
              });
              var marker = new google.maps.Marker({
                position: uluru,
                map: map
              });
            }}
          </script>
        </div>
      </div>
    );
  }
}

//export default Mapa;
export default scriptLoader([
  "https://maps.googleapis.com/maps/api/js?key=APIKEY"
])(Mapa);
