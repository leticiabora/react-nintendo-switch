import React, { Component } from 'react';
import Botao from '../Botao/Botao';
import './Controle.css';

class Controle extends Component {
  render() {
    const { controleDireito } = this.props;
    return (
      <div className={`joycon-wrapper ${controleDireito ? 'joycon-right' : 'joycon-left'}`}>
        <Botao />
        <div className="joycon-buttons-side">
          <Botao />
          <Botao textoDoBotao={ controleDireito ? 'A' : '>' } />
        </div>
        <Botao />
      </div>
    );
  }
};

export default Controle;