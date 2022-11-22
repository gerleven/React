//https://stackblitz.com/run?file=demo.js
//https://mui.com/material-ui/react-snackbar/#customization
import { React, useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Eror404 from "./Pages/Error404";
import Cancion from "./Pages/Cancion";
import Buscador from "./Components/Buscador";
import Letra from "./Components/Letra";
import ListaCanciones from "./Components/ListaCanciones";
import Loader from "./Components/Loader/Loader";
import Stack from "@mui/material/Stack";
import { Alert, AlertTitle, Fade } from "@mui/material";
import { HashRouter } from "react-router-dom";
import fakeListOfArtists from "./fakeSongs";
import CustomSnakBar from "./Components/SnackBar/CustomSnackBar";
import AppGlobalService from "./Services/AppGlobal.service";
import "./App.css";

function App() {
  //Variables
  let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];
  if (mySongsInit.length == 0) {
    mySongsInit = [
      {
        artist: "Try to open it!",
        avatar: fakeListOfArtists[Math.floor(Math.random() * 5)].avatar,
        song: "Example of a song added to your list",
        lyric: "This is just an example of a song added to your list...",
      },
    ];
  }

  let searchInit = {
    artist: "",
    song: "",
    request: false,
  };
  
  let currentSongInit = {};
  
  let toastStateInit = {
    open: true,
    message: "This App uses third party API. In case the API does not work a fake information will be used!",
  };

  //Variables de estado
  const [mySongs, setMySongs] = useState(mySongsInit); //snippet: usf // array vacio o de canciones
  const [search, setSearch] = useState(searchInit); //inputs del buscador
  const [currentSong, setCurrentSong] = useState(currentSongInit); //Resultado de la api al buscar con los inputs del search
  const [error, setError] = useState(false); //boolean
  const [loading, setLoading] = useState(false);
  const [toastState, setToastState] = useState(toastStateInit);

  
  

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
        let songApi = `https://api.lyrics.ovh/v1/${artist}/${song}`;

        let artistResponse = await (await fetch(artistApi)).json();
        let songResponse = await (await fetch(songApi)).json();
        if (!songResponse.lyrics) {
          songResponse.lyrics = `Oops! It looks like the api.lyrics.ovh is not working right now:     <<${songApi}>>`;
        }

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
        setToastState({open: true, message: "It looks like the API of Lyrics is not working. A fake data will be loaded."});
        console.log("error: ", error);
        //setError(true);
        setLoading(false);
        setCurrentSong(currentSongInit);
        setCurrentSong({
          artist: artist,
          avatar: fakeListOfArtists[Math.floor(Math.random() * 5)].avatar,
          song: `Fake example of "${song}"`,
          lyric:
            "Whoops! The API doesn't seem to be working right now, but use this fake example to get you going...",
        });
      }
    };

    if (search.request) {
      getData();
    } else {
      return;
    }
  }, [search]);
  return (
    // <BrowserRouter>
    <HashRouter basename="/">
      <CssBaseline>
        <div className="App">
          <CustomSnakBar toastState={toastState} setToastState={setToastState}/>
          <Header />

          <main className="App-main">
            <Routes>
              <Route
                path="/"
                element={
                  <>
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
                            The search returned no results.:
                            </AlertTitle>
                            <ul>
                              <li>
                                Artist: <b>{search.artist}</b>
                              </li>
                              <li>
                                Song: <b>{search.song}</b>
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
                      <ListaCanciones
                        mySongs={mySongs}
                        setMySongs={setMySongs}
                      />
                    )}
                  </>
                }
              ></Route>
              <Route
                path="/cancion/:id"
                element={<Cancion mySongs={mySongs} />}
              />
              <Route path="*" element={<Eror404 />} />
            </Routes>
          </main>
        </div>
      </CssBaseline>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
