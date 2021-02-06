import React, { Component } from 'react';
import './Botao.css';

class Botao extends Component {
  render() {
    const { textoDoBotao } = this.props;
    return (
      <button type="button" className="button-wrapper">
        { textoDoBotao }
      </button>
    );
  }
};

export default Botao;