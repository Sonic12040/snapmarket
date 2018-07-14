import React, { Component } from 'react';
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const API_KEY = process.env.REACT_APP_API_KEY;
const mapURL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;

class Map extends Component {
   render() {
   const MapWithAMarker = withScriptjs(withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat:38.8283,lng:-98.5795 } }
        defaultZoom = { 4.6 }
      >

      <Marker
      position={{ lat:38.8283,lng:-98.5795  }}
      onClick={props.onToggleOpen}
      />

      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
      <p>Test</p>
      </InfoWindow>}
      </GoogleMap>
   )));

   return(
      <div>
        <MapWithAMarker
          googleMapURL= {mapURL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
   );
   }
};
export default Map;
