import React from "react";
import "./EntradasDigitais.css";

let entradas_8 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,];

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
        <div>{this.construirBotoes(entradas_8)}</div>
      </div>
    );
  }

  construirBotoes(entradas, numeroLinha = 0) {
    let botoes = [];
    let oitoBotoes = [];
    for (var i = 0; i < entradas.length; i++) {
      let botao = (
        <button
          id={"entrada" + i + 1}
          className={
            entradas[i] === 1 ? "btn btn-success" : "btn btn-seccondary"
          }
        >
          {i + 1}
        </button>
      );
      oitoBotoes.push(botao);
      if (oitoBotoes.length % 8 === 0) {
        botoes.push(this.envolverJSXNaDiv(oitoBotoes))
        oitoBotoes = [];
      }
    }
    return botoes;
  }

  envolverJSXNaDiv(html){
    return <div>{html}</div>
  }
}

export default EntradasDigitais;
