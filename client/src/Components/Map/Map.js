import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';
import Marker from './../Marker';
import CarrotIcon from './carrotMapIcon.png';
import InfoWindow from './../InfoWindow';

const API_KEY = process.env.REACT_APP_API_KEY;


class Map extends Component {
  state = {
    markets: [],
    marketname: "Market Name",
    address: "Address",
    zipcode: 60565,
    benefits: {},
    benefitsArray: [],
    items: [],
    showResults: false
    }

  // componentDidMount() {
  //   this.props.searchActions.handleSearch("");
  // }



  // populateWindow = (market) => {
  //   console.log('this is the market.query', market.query);
  //   this.setState({
  //     marketname: market.MarketName,
  //     address: market.Address,
  //     zipcode: market.ZipCode,
  //     benefits: market.Benefits,
  //     items: market.Items,
  //     benefitsArray: this.convertBenefitsToArray(market)

  //   })
  // }



  static defaultProps = {

    center: {
      lat: 38.8283,
      lng: -98.5795
    },
    zoom: 4
  };

  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
{/* //if else around info window. if I have props that are good show window, else show error div */}
{ this.state.showResults ? true : false }
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
            onClick={()=>{this.populateWindow(market)}}
          />
        ))}

        </GoogleMapReact>
      </div>
    );
  }

}

function mapStateToProps(state) {
  console.log(state.benefitsArray, "map.js 93");
  return {
    results: state.results,
    benefitsArray: state.benefitsArray,
    showResults: state.showResults,
  };
}


export default connect(mapStateToProps)(Map);