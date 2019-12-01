import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div className="map__marker">
    <i map__text>{text}</i>
  </div>
);

class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 50.09681,
      lng: 19.98124
    },
    zoom: 15
  };

  render() {
    const apiKey = "AIzaSyAf8ZXvJ0y2N7oU3l52dbirYdR6ZdMByyg";
    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={50.09688} lng={19.98124} text="AUTO AS " />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;
