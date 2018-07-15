import React, { Component } from 'react';
const { compose, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);
const mapURL = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
console.log(mapURL);

class Map extends Component {
   render() {
   const MapWithAMarker = compose(
    withStateHandlers(() => ({
      isOpen: false,
    }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
    }),
    withScriptjs,
    withGoogleMap
  )(props => 
      <GoogleMap
        defaultCenter = { { lat:38.8283,lng:-98.5795 } }
        defaultZoom = { 4.6 }
      >
        {/* //Create loop to place all markers from database */}
        <Marker
        position={{ lat:38.8283,lng:-98.5795  }}
        onClick={props.onToggleOpen}
        >
        {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
          <h1>Oh hai!</h1>
        </InfoWindow>}
        </Marker>
      </GoogleMap>
   );

   return(
      <div>
        <MapWithAMarker
          googleMapURL= {mapURL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `800px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
   );
   }
};
export default Map;
