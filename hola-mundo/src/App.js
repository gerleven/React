import logo from "./logo.svg";
import "./App.css";
import Componente from "./Components/Componente";
import Propiedades from "./Components/Propiedades";
import Estado from "./Components/Estado";
import RenderizadoCondicional from "./Components/RenderizadoCondicional";
import Listas from "./Components/Listas";
import Contador from "./Components/Contador";
import Contador2 from "./Components/Contador2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <section>
          <Estado />
        </section>
        <section>
          <RenderizadoCondicional />
        </section> */}
        {/* <section>
          <img src={logo} className="App-logo" alt="logo" />
        </section> */}

        {/* <section>
          <Componente mensaje="Este Mensaje viene desde el padre"></Componente>
        </section>
        <hr/>
        <section>
          <Propiedades
            cadena = "Una cadena"
            numero = {99}
            booleano = {true}
            arreglo = {[1,2,3]}
            objeto = {{curso: "React", donde: "Diveria"}}
            funcion = {(num)=>{return num*num}}
            elementoReact = {<h6>Elemento React</h6>}
            componenteReact = {<Componente mensaje="Componente pasado como Prop"/>}
            />
        </section>
            <hr/>
            <section>
          <Listas />
        </section>
         */}
        <hr />
        <Contador />
        <Contador2 />
        <Contador2 titulo="likes" />
      </header>
    </div>
  );
}

export default App;
