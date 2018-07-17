import React, { Component } from 'react';
import API from './../../utils/API';
const { compose, withStateHandlers } = require("recompose");
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
  state = {
    markets:[],
  }

  //Lifecycle
  componentDidMount() {
    this.loadMarkets();
  }
    
  //Methods
  loadMarkets = () => {
    API.getAllMarkets()
      .then(res =>
      this.setState({markets: res})
    )
    .catch(err => console.log(err));
  }

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
      
      {this.state.markets.map( market => (
                <Marker
                position={{ lat:parseFloat(market.Coordinates.Latitude), lng:parseFloat(market.Coordinates.Longitude)}}
                onClick={props.onToggleOpen}
                >
                {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
                  <h1>{market.MarketName}</h1>
                </InfoWindow>}
              </Marker>
      ))
    }

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
