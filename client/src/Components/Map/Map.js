//Imports
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';
import Marker from './../Marker';
import CarrotIcon from './carrotMapIcon.png';
import InfoWindow from './../InfoWindow';
import { handleMarketClick } from "../../store/actions/searchActions"
// Imports your Google Maps API key from the .env file
const API_KEY = process.env.REACT_APP_API_KEY;

class Map extends Component {
// Determines which InfoWindow to return in the Render
  infoWindowReturn() {
    let displayContent = this.props.targetedMarket;
    if(this.props.showResults && displayContent === null) {
      return <div>
        {this.props.results.map(result => (
          <InfoWindow
            marketname={result.MarketName}
            address={result.Address}
            zipcode={result.ZipCode}
            benefits={result.Benefits}
            items={result.Items}
            benefitsArray={this.props.benefitsArray}
            showResults={this.props.showResults}
          />
        ))}
      </div>
    } else if (this.props.showResults && displayContent !== null) {
      return <div>
        {displayContent.map(click => (
          <InfoWindow
            marketname={click.MarketName}
            address={click.Address}
            zipcode={click.ZipCode}
            benefits={click.Benefits}
            items={click.Items}
            benefitsArray={this.props.benefitsArray}
            showResults={this.props.showResults}
          />
        ))}
      </div>
    } else {
      return (
        <InfoWindow
          marketname={"No Market"}
          address={""}
          zipcode={""}
          benefits={""}
          items={[""]}
          benefitsArray={[""]}
          showResults={this.props.showResults}
        />
      )
    }
  }
// Renders the content to the page
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        {this.infoWindowReturn()}
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.props.results.map((market, index) => (
              <Marker
                key={index}
                lat={market.Coordinates.Latitude}
                lng={market.Coordinates.Longitude}
                image={CarrotIcon}
                alttext={market.MarketName}
                onClick={() => {this.props.onHandleMarketClick(market.Address)} }
              />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}
// Redux State management
function mapStateToProps(state) {
  return {
    results: state.results,
    benefitsArray: state.benefitsArray,
    showResults: state.showResults,
    targetedMarket: state.targetedMarket
  };
}
// This dispatches the Address to Redux on the click of a Map Marker
const mapDispatchToProps = (dispatch)=> ({
  onHandleMarketClick: (Address) =>
    dispatch(handleMarketClick(Address))
});

Map.defaultProps = {
  center: {
    lat: 38.8283,
    lng: -98.5795
  },
  zoom: 4
}
// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Map);
