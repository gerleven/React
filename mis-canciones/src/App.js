import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Eror404 from "./Pages/Error404";
import Cancion from "./Pages/Cancion";
import { React, useEffect, useState } from "react";
import Buscador from "./Components/Buscador";
import Letra from "./Components/Letra";
import ListaCanciones from "./Components/ListaCanciones";
import Loader from "./Components/Loader/Loader";
import Stack from "@mui/material/Stack";
import { Alert, AlertTitle } from "@mui/material";
import { HashRouter } from "react-router-dom";

import { getArtist } from "./Services/Songs.services";
import { getFakeArtist } from "./Services/FakeSongs.services";
import { getPokemons } from "./Services/Pokemons.services";

/*How to replace "makeStyle" using 1) "myStyleObject" and "sx" property 2) a "CSS class" and "className" property: Check Loader component*/

function App() {
  //Variables
  let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || []; //{artist,avatar,song,lyric}

  let searchInit = {
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
  useEffect(
    /* async */ () => {
      //IMPORTANTE: No podemos ponerle un async a la funcion callback que le pasamos por parametros al usseEfect, pero si podemos declarar una nueva funcion getData adentro y hacer que esa sea la funcion async

      //Para probar si funciona la API:
      //https://www.theaudiodb.com/api/v1/json/2/search.php?s=mika
      localStorage.setItem("mySongs", JSON.stringify(mySongs));

      //getArtist
      //getFakeArtist
      //getPokemons

      const { artist, song } = search;
      setLoading(true);
      setCurrentSong({});
      setError(false);

      const getData = () => {
        this.getFakeArtist("mika")
          .then((data) => {
            console.log(data);
            debugger;
          })
          .catch((error) => {
            debugger;
          });
      };

      // const getData = async () => {

      //   getArtist(artist).then(
      //     data=>{

      //     }
      //   ).catch();
      //   try {
      //     let artistApi = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      //     let songApi = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      //     let auxRequest = "https://pokeapi.co/api/v2/pokemon/";
      //     let auxRequestResponse = await fetch(auxRequest).then();
      //     console.log(auxRequestResponse);
      //     debugger;
      //     let auxRequestResponseJson = auxRequestResponse.json();

      //     let artistResponse = await fetch(artistApi);
      //     let artistResponseJson = {};
      //     if (artistResponse) {
      //       artistResponseJson = await artistResponse.json();
      //     } else {
      //       artistResponseJson = {
      //         artists: [
      //           {
      //             strArtist: "Mika",
      //             strArtistThumb:
      //               "https://images.ecestaticos.com/qZbugK4NVj5j_GNqLSFM7I2YcDo=/250x0:2252x1502/557x418/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F327%2F71a%2Fe2e%2F32771ae2e2e2867a7d352b08bd6413ad.jpg",
      //           },
      //         ],
      //       };
      //     }
      //     let songResponse = await (await fetch(songApi)).json();
      //     if (!songResponse.lyrics) {
      //       songResponse.lyrics = `Oops! It looks like the api.lyrics.ovh is not working right now:     <<${songApi}>>`;
      //     }

      //     setCurrentSong({
      //       artist: artistResponse.artists[0].strArtist,
      //       avatar: artistResponse.artists[0].strArtistThumb,
      //       song,
      //       lyric:
      //         songResponse.lyrics != undefined
      //           ? songResponse.lyrics
      //           : songResponse.error,
      //     });
      //     setLoading(false);
      //   } catch (error) {
      //     console.log("error: ", error);
      //     setError(true);
      //     setLoading(false);
      //     setCurrentSong(currentSongInit);
      //   }
      // };

      if (search.request) {
        getData();
      } else {
        return;
      }
    },
    [search]
  );
  return (
    // <BrowserRouter>
    <HashRouter basename="/">
      <CssBaseline>
        <div className="App-backgroundColor">
          <div className="App">
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
        </div>
      </CssBaseline>
    </HashRouter>
    // </BrowserRouter>
  );
}

export default App;
