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
            <div className="foot fs-didact">
              <div className="form-container">
                &copy; Copyright 2018 - Da Green Monkeys<br/><br />
                Ryan Cybul, Raj Patel, Melissa Prax, Daniel Richmond, Bridgette Smith
              </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
