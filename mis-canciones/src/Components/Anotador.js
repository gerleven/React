let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];
let searchInit = {
  artist: "",
  song: "",
  request: false,
};
let currentSongInit = {} | { artist: "", avatar: "", song: "", lyric: "" };

const [mySongs, setMySongs] = useState(mySongsInit); //snippet: usf // array vacio o de canciones
const [search, setSearch] = useState(searchInit); //inputs del buscador
const [currentSong, setCurrentSong] = useState(currentSongInit); //Resultado de la api al buscar con los inputs del search
const [error, setError] = useState(false); //boolean
const [loading, setLoading] = useState(false);

const Loader = () => {};
const ListaCanciones = ({ mySongs, setMySongs }) => {
  "muestra el alert o muestra la lista mySongs";
};
const Letra = ({
  currentSong,
  setCurrentSong,
  mySongs,
  setMySongs,
  setSearch,
}) => {
  const handleClickAgregar = (event) => {
    setCurrentSong({});
    setSearch({ artist: "", song: "", request: false });
    setMySongs([...mySongs, currentSong]);
  };
};

const Buscador = ({ search, setSearch, setError }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({
      artist: search.artist,
      song: search.song,
      request: true,
    });
  };

  const handleReset = (e) => {
    setSearch({
      artist: "",
      song: "",
      request: false,
    });
    setError(false);
  };
};

//App
useEffect(() => {
  JSON.parse(localStorage.getItem("mySongs"));

  const getData = async () => {
    const { artist, song } = search;
    setLoading(true);

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
