import React from "react";

class EntradasDigitais extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),

      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Entradas Digitais funcionando</h1>

        <h2>Hora {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default EntradasDigitais;
