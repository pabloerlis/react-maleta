import React from "react";
import EntradasDigitais from "./components/EntradasDigitais/EntradasDigitais";
import SaidasDigitais from "./components/SaidasDigitais/SaidasDigitais";
import "./App.css";
class App extends React.Component {
  render() {
    return (
      <div>
        <EntradasDigitais />
        <SaidasDigitais/>
      </div>
    );
  }
}

export default App;
