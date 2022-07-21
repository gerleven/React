import React, { useState, useEffect } from "react";

const RelojHooks = (props) => {
  const [date, setDate] = useState(new Date().toLocaleTimeString()); //usf (snippet)
  const [running, setRunning] = useState(false);

  const start = () => {
    setRunning(true);
  };

  const stop = () => {
    setRunning(false);
  };

  return (
    <div>
      <h3>Reloj con Hooks:</h3>
      <div>
        <span>{date}</span>{" "}
        {running === true ? <span>ON</span> : <span>OFF</span>}
      </div>
      <button onClick={start}>Iniciar</button>
      <button onClick={stop}>Detener</button>
    </div>
  );
};

export default RelojHooks;
