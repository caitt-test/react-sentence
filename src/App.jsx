import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Answer from './Answer';
import Questionnaire from './Questionnaire';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Based on awesome Create React App
          </p>
        </header>
        <Questionnaire/>
        <Answer/>
      </div>
    );
  }
}

export default App;
