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
import Letra from "./Components/Letra";
import ListaCanciones from "./Components/ListaCanciones";
import Loader from "./Components/Loader";

function App() {
  //Variables
  let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];
  let searchInit = {
    artist: "",
    song: "",
    request: false,
  };

  let currentSongInit = {
    artist: "",
    avatar: "",
    song: "",
    lyric: "",
  };

  //Variables de estado
  const [mySongs, setMySongs] = useState(mySongsInit); //snippet: usf
  const [search, setSearch] = useState(searchInit);
  const [currentSong, setCurrentSong] = useState(currentSongInit);
  const [error, setError] = useState(false);

  //Funcion de efecto
  useEffect(() => {
    JSON.parse(localStorage.getItem("mySongs"));

    const getData = async () => {
      const { artist, song } = search;

      try {
        let artistApi = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
        //let songApi = `https://api.lyrics.ovh/v1/${artist}/${song}`;

        let artistResponse = await (await fetch(artistApi)).json();
        //let songResponse = await (await fetch(songApi)).json();
        let songResponse = {
          lyrics: "Lyrics not found",
        };

        setCurrentSong({
          artist: artistResponse.artists[0].strArtist,
          avatar: artistResponse.artists[0].strArtistThumb,
          song,
          lyric:
            songResponse.lyrics != undefined
              ? songResponse.lyrics
              : songResponse.error,
        });
        let a = currentSong;
      } catch (error) {
        console.log("error: ", error);
        setSearch(({ ...search }.request = false));
      }
    };

    if (search.request) {
      getData();
    } else {
      return; //We don't need to unsbscribe because it is a public API
    }
  }, [search]);

  return (
    <BrowserRouter>
      <CssBaseline>
        <div className="App">
          <Header />
          
          <Buscador search={search} setSearch={setSearch} setError={setError} />

          {true?<></>:<></>}
          Object
          <Loader/>
          <ListaCanciones mySongs={mySongs} setMySongs={setMySongs}/>
          
          {!search.request ? null : (
            <Letra
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              mySongs={mySongs}
              setMySongs={setMySongs}
              setSearch={setSearch}
            />
          )}

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
