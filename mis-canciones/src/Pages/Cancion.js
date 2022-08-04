import React from "react";
import { useParams } from "react-router-dom";

const Cancion = () => {
    const {id} = useParams();
  return (
    <>
      <h1>Canción {id}</h1>
    </>
  );
};

export default Cancion;
