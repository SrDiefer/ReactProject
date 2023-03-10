import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Alejandra",
      apellidos: "Rodriguez",
    };
  }

  cambiarDatos() {
    if (this.state.name === "Alejandra" && this.state.apellidos === "Rodriguez")
      this.setState({ name: "Maria", apellidos: "Perez" });
    else this.setState({ name: "Alejandra", apellidos: "Rodriguez" });
  }
  render() {
    return (
      <>
        <h2>
          Mi Nombre es {this.state.name} {this.state.apellidos}
        </h2>
        {/*bind(): MetodoParaTomarPrestado.bind(ObjetoquePresta)  */}
        <button onClick={this.cambiarDatos.bind(this)}>Pulsar</button>
      </>
    );
  }
}

export default State;
