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
  let mySongsInit = JSON.parse(localStorage.getItem("mySongs"));
  let searchInit = {
    artist: "",
    songs: "",
    request: false,
  };

  //Variables de estado
  const [mySongs, setMySongs] = useState(mySongsInit); //snippet: usf
  const [search, setSearch] = useState(searchInit);
  const [currentSong, setCurrentSong] = useState({});
  const [error, setError] = useState(false);

  return (
    <BrowserRouter>
      <CssBaseline>
        <div className="App">
          <Header />
          <Buscador/>
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
