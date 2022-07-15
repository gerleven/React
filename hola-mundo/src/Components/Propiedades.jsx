import React from 'react';

const Propiedades = (props) => {
    return (
    <div>
        <hr/>
        <h2>Propiedades:</h2>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano?"Verdadero":"Falso"}</li>
            <li>{props.arreglo.join(", ")}</li>
            <li>{props.objeto.curso+" - "+props.objeto.donde}</li>
            <li>{props.arreglo.map(props.funcion).join(", ")}</li>
            <li>{props.elementoReact}</li>
            <li>{props.componenteReact}</li>
        </ul>
    </div>
    );
}
 
export default Propiedades;