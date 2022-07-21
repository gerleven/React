import React, { useState } from "react";

const ContadorHooks = (props) => {
  const [cuenta, setCuenta] = useState(0);
  //const ["estado", "funcion para actualizar el estado con prefijo SET"] = useState("valor inicial del estado");

  //desaparecen todos los this.
  //Ahora en vez de usar this.state directamente usamos la variable cuenta

  //Duda: y si en mi estado quiero tener mas de una variable? seria un objeto y dentro del objeto todas las properties?

  const sumar = () => {
    setCuenta(cuenta + 1);
  };

  const restar = () => {
    setCuenta(cuenta - 1);
  };

  return (
    <div>
      <h1>Contador de {props.titulo}</h1>
      <span>
        <span>{cuenta}</span>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
      </span>
    </div>
  );
};

//El defaultProps se lo agregamos al final como una propertie que le agregamos al obj que retorna la funcion guardada en la variable ContadorHooks
ContadorHooks.defaultProps = {
  titulo: "Clicks",
};

export default ContadorHooks;
