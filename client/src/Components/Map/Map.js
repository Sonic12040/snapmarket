import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';
import Marker from './../Marker';
import CarrotIcon from './carrotMapIcon.png';
import InfoWindow from './../InfoWindow';
import { handleMarketClick } from "../../store/actions/searchActions"

const API_KEY = process.env.REACT_APP_API_KEY;


class Map extends Component {


handleClick() {
    this.setState({
      condition: !this.state.condition
    });
  }

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




  static defaultProps = {

    center: {
      lat: 38.8283,
      lng: -98.5795
    },
    zoom: 4
  };

  forcePage() {

    this.forceUpdate();

  }

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
      ))
    }

    </div>
    } else {
      return <InfoWindow
          marketname={"No Market"}
          address={""}
          zipcode={""}
          benefits={""}
          items={[""]}
          benefitsArray={[""]}
          showResults={this.props.showResults}
        />
    }
  }

  render() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        {/* Info Window Return goes here */}
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




function mapStateToProps(state) {
  console.log('state.benefitsArray', state.benefitsArray);
  return {
    results: state.results,
    benefitsArray: state.benefitsArray,
    showResults: state.showResults,
    targetedMarket: state.targetedMarket
  };
}

// this imports actions from redux, we use another name just to make it clear
const mapDispatchToProps = (dispatch)=> ({
  onHandleMarketClick: (Address) =>
    dispatch(handleMarketClick(Address))

});


export default connect(mapStateToProps, mapDispatchToProps)(Map);

