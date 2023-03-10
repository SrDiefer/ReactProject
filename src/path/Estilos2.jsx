import React, { Component } from "react";
class Estilos2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let age = 38;
    const titulo = {
      textAlign: "center",
      color: "green",
      //background Color depends on the ternary operator
      //{condition} true:false
      backgroundColor: age >= 37 ? "yellow" : "oranged",
    };
    //Return: una etiqueta h1 con un estilo tomado de la variable const, la cual almacena 
    //estilos css
    return (
      <>
        <h1 style={titulo}>Soy un Titulo</h1>
      </>
    );
  }
}

export default Estilos2;
