import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
// import {BrowserRouter,Routes,Route,NavLink,Link,Navigate,Outlet,useParams,useNavigate,useLocation} from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  NavLink,
  Link,
  Navigate,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
  Route,
} from "react-router-dom";
import Header from "./Components/Header";
import Eror404 from "./Pages/Error404";
import Home from "./Pages/Home";
import Cancion from "./Pages/Cancion";
import { React, useEffect, useState } from "react";
import Buscador from "./Components/Buscador";

function App() {
  //Variables
  let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];
  let searchInit = {
    artist: "",
    song: "",
    request: false,
  };

  //Variables de estado
  const [mySongs, setMySongs] = useState(mySongsInit); //snippet: usf
  const [search, setSearch] = useState(searchInit);
  const [currentSong, setCurrentSong] = useState({});
  const [error, setError] = useState(false);

  //Funcion de efecto
  useEffect(()=>{
    JSON.parse(localStorage.getItem("mySongs"))

    const getData= async ()=>{
      const {artist, song} = search;

      
      try {
        let artistApi = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${search.artist}`;
        let songApi = `https://api.lyrics.ovh/v1/${search.artist}/${search.song}`;

        let artistResponse = await (await fetch(artistApi)).json();
        let songResponse = await (await fetch(songApi)).json();

        console.log(artistResponse,songResponse);
        
      } catch (error) {
        console.log("error: ",error);
        setSearch({...search}.request=false)
      }

    }

    if(search.request){
      getData();
    }
    else{
      return; //We don't need to unsbscribe because it is a public API
    }

  }, [search]);

  return (
    <BrowserRouter>
      <CssBaseline>
        <div className="App">
          <Header />
          <Buscador search={search} setSearch={setSearch} error={setError} />
          <main className="App-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cancion/:id" element={<Cancion />} />
              <Route path="*" element={<Eror404 />} />
            </Routes>
          </main>
        </div>
      </CssBaseline>
    </BrowserRouter>
  );
}

export default App;
