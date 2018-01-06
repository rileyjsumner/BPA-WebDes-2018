import React, { Component } from 'react';
import { SplashPage } from './PageComponents/SplashPage.js';
import { HomePage } from './PageComponents/HomePage.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SplashPage/>
        <HomePage/>
      </div>
    );
  }
}
export default App;
