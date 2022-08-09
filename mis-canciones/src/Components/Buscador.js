import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

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
      />
      <TextField
        id="song"
        name="song"
        label="Cancion"
        variant="standard"
        required
      />
      <IconButton color="primary" size="small" type="submit">
        <SearchIcon/>
      </IconButton>
    </Box>
  );
};

export default Buscador;
