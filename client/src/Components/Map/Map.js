import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import API from './../../utils/API';
import Marker from './../Marker';
import CarrotIcon from './carrotMapIcon.png';
import InfoWindow from './../InfoWindow';
import ItemList from './../ItemList';

const API_KEY = process.env.REACT_APP_API_KEY;


class Map extends Component {
  state = {
    markets: [],
    marketname: "Market Name",
    address: "Address",
    zipcode: 60565,
    benefits: [],
    items: []
  }

  componentDidMount() {
    this.loadMarkets();
  }

  loadMarkets = () => {
    API.getAllMarkets()
      .then(res =>
      this.setState({markets: res})
    )
    .catch(err => console.log(err));
  }

  populateWindow = (market) => {
    this.setState({
      marketname: market.MarketName,
      address: market.Address,
      zipcode: market.ZipCode,
      benefits: "Benefits Here",
      items: market.Items
    })
  }  

  displayItems = () => {
    this.state.items.forEach((item) => {
      <ItemList 
        item={item}
      />
    })
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
        <InfoWindow 
          marketname={this.state.marketname}
          address={this.state.address}
          zipcode={this.state.zipcode}
          benefits={this.state.benefits}
          items={this.displayItems()}
        />
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {this.state.markets.map((market, index) => (
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

export default Map;