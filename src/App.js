import React, { Component } from 'react';
import { Controle, Tela } from './components';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Controle />
        <Tela />
        <Controle controleDireito />
      </div>
    );
  }
}

export default App;
