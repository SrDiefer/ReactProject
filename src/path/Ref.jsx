import React, { createRef } from "react";
const Ref = () => {
  const cambioColor = createRef();
  const cambioColorTexto = () => {
    cambioColor.current.style.color = "blue";
  };
  return (
    <>
      <h1 ref={cambioColor}>Soy Un titulo y cambio de color</h1>
      <button onClick={cambioColorTexto}>Cambia Color</button>
    </>
  );
};
export default Ref;
