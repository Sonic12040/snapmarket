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
    items: []
  }

  // componentDidMount() {
  //   this.props.searchActions.handleSearch("36542");
  // }



  populateWindow = (market) => {
    this.setState({
      marketname: market.MarketName,
      address: market.Address,
      zipcode: market.ZipCode,
      benefits: market.Benefits,
      items: market.Items,
      benefitsArray: this.convertBenefitsToArray(market)
    })
  }

  convertBenefitsToArray = (market) => {
    let BenefitsArray = [];
    if (market.Benefits.Wic) {
      BenefitsArray.push("WIC");
    };
    if (market.Benefits.WicCash) {
      BenefitsArray.push("WICCash");
    };
    if (market.Benefits.Snap) {
      BenefitsArray.push("SNAP");
    };
    if (market.Benefits.SFMNP) {
      BenefitsArray.push("SFMNP");
    };

    return BenefitsArray;
  }


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
        {this.props.results.map(result => (
          <InfoWindow 
            marketname={result.MarketName}
            address={result.Address}
            zipcode={result.ZipCode}
            benefits={result.Benefits}
            items={result.Items}
            benefitsArray={this.state.benefitsArray}
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
  return {
    results: state.results
  };
}

export default connect(mapStateToProps)(Map);