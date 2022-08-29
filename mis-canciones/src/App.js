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
import ListaCanciones from "./Components/ListaCanciones/ListaCanciones";
import Loader from "./Components/Loader/Loader";
import Stack from "@mui/material/Stack";
import { Alert, AlertTitle } from "@mui/material";

function App() {
  //Variables
  let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [],
    searchInit = {
      artist: "",
      song: "",
      request: false,
    };

  let currentSongInit = {};

  //Variables de estado
  const [mySongs, setMySongs] = useState(mySongsInit); //snippet: usf // array vacio o de canciones
  const [search, setSearch] = useState(searchInit); //inputs del buscador
  const [currentSong, setCurrentSong] = useState(currentSongInit); //Resultado de la api al buscar con los inputs del search
  const [error, setError] = useState(false); //boolean
  const [loading, setLoading] = useState(false);

  //Funcion de efecto
  useEffect(() => {
    localStorage.setItem("mySongs", JSON.stringify(mySongs));

    const getData = async () => {
      const { artist, song } = search;
      setLoading(true);
      setCurrentSong({});
      setError(false);

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
        setLoading(false);
      } catch (error) {
        console.log("error: ", error);
        setError(true);
        setLoading(false);
        setCurrentSong(currentSongInit);
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
        <div className="App-backgroundColor">
          <div className="App">
            <Header />
            <Buscador
              search={search}
              setSearch={setSearch}
              setError={setError}
              setCurrentSong={setCurrentSong}
            />

            {search.request ? ( //Si se hizo una busqueda
              error ? (
                <Stack className="stackAlert">
                  <Alert severity="error">
                    <AlertTitle>
                      No hubo resultados para la siguiente busqueda:
                    </AlertTitle>
                    <ul>
                      <li>
                        Artista: <b>{search.artist}</b>
                      </li>
                      <li>
                        Canción: <b>{search.song}</b>
                      </li>
                    </ul>
                  </Alert>
                </Stack>
              ) : loading ? (
                <Loader />
              ) : (
                <Letra
                  currentSong={currentSong}
                  setCurrentSong={setCurrentSong}
                  mySongs={mySongs}
                  setMySongs={setMySongs}
                  setSearch={setSearch}
                />
              )
            ) : (
              //No se hizo una busqueda
              <ListaCanciones mySongs={mySongs} setMySongs={setMySongs} />
            )}

            <main className="App-main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cancion/:id" element={<Cancion />} />
                <Route path="*" element={<Eror404 />} />
              </Routes>
            </main>
          </div>
        </div>
      </CssBaseline>
    </BrowserRouter>
  );
}

export default App;
