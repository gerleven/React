import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle } from '@mui/icons-material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import InputAdornment from '@mui/material/InputAdornment';

const Buscador = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      autoComplete="on"
    >
      <IconButton color="primary" size="small" type="reset">
        <HomeIcon />
      </IconButton>

      <TextField
        
        id="artist"
        name="artist"
        label="Artista"
        variant="standard"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="song"
        name="song"
        label="Cancion"
        variant="standard"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MusicNoteIcon />
            </InputAdornment>
          ),
        }}
      />
      <IconButton color="primary" size="small" type="submit">
        <SearchIcon/>
      </IconButton>
    </Box>
  );
};

export default Buscador;
