import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle } from "@mui/icons-material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import InputAdornment from "@mui/material/InputAdornment";

const buscadorStyles = {
  "& > :not(style)": { m: 1, width: "25ch" },
  "& > *": {
    margin: 0,
    width: "auto",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Buscador = ({ search, setSearch, setError, setCurrentSong }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentSong({});
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

  return (
    <Box
      component="form"
      sx={buscadorStyles}
      autoComplete="on"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      {/* Home Button */}
      <IconButton
        color="primary"
        size="small"
        type="reset"
        style={{ width: "30px", marginTop: "30px" }}
      >
        <HomeIcon />
      </IconButton>

      {/* Artist  Field */}
      <TextField
        id="artist"
        name="artist"
        label="Artist"
        variant="standard"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        value={search.artist}
        onChange={(e) => {
          setSearch({
            artist: e.target.value,
            song: search.song,
            request: false,
          });
        }}
      />

      {/* Song Field: */}
      <TextField
        id="song"
        name="song"
        label="Song"
        variant="standard"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MusicNoteIcon />
            </InputAdornment>
          ),
        }}
        value={search.song}
        onChange={(e) => {
          setSearch({
            artist: search.artist,
            song: e.target.value,
            request: false,
          });
        }}
      />

      {/* Search Button */}
      <IconButton
        color="primary"
        size="small"
        type="submit"
        style={{ width: "30px", marginTop: "30px" }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default Buscador;
