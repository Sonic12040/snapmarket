import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Map from './Components/Map';

class App extends Component {
  render() {
    return (
    <div>
        <Header />
        <div className="container">
        <Main />
        <Map />
        </div>
    </div>
    );
  }
}
