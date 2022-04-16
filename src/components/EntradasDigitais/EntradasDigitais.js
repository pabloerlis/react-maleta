import React from "react";
import "./EntradasDigitais.css";

let entradas_8 = [1, 1, 1, 1, 1, 1, 1, 1];
let entradas_64 = [
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
];
class EntradasDigitais extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h3>Entradas Digitais(CLP)</h3>
        {this.construirBotoes(entradas_8)}
      </div>
    );
  }

  construirBotoes(entradas) {
    let botoes = [];
    for (var i = 0; i < entradas.length; i++) {
      botoes.push(
        <button
          className={
            entradas[i] === 1 ? "btn btn-success" : "btn btn-seccondary"
          }
        >
          {i}
        </button>
      );
    }
    return botoes;
  }
}

export default EntradasDigitais;
