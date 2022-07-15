import logo from './logo.svg';
import './App.css';
import Componente from './Components/Componente';
import Propiedades from './Components/Propiedades';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        <section>
          <Componente mensaje="Este Mensaje viene desde el padre"></Componente>
        </section>
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
          {console.table(Propiedades)}
        </section>
      </header>
    </div>
  );
}

export default App;
