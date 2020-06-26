import "./Contador.css";
import React, { Component } from "react";
import DisplayPasso from "./DisplayPasso";
import DisplayValor from "./DisplayValor";
import DisplayBotao from "./DisplayBotao";

export default class Contador extends Component {
  state = {
    passo: this.props.passo || 1,
    valor: this.props.valor || 0,
  };

  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo,
    });
  };

  render() {
    return (
      <div className="Contador">
        <h2>Contador</h2>
        <DisplayPasso
          passo={this.state.passo}
          onPassoChange={(novoPasso) => {
            this.setState({
              passo: novoPasso,
            });
          }}
        />
        <DisplayValor valor={this.state.valor} />
        <DisplayBotao dec={this.dec} inc={this.inc} />
      </div>
    );
  }
}
