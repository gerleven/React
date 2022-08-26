import React from "react";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import LaunchIcon from '@mui/icons-material/Launch';

import "./ListaCanciones.css";
import "../../App.css";
import { Link } from "react-router-dom";

// const myStyle = {
//   width: "60%",
//   margin: "auto",
//   padding: "30px"
// };
// const myProperties = { sx: myStyle, spacing: 2 };
// <Stack {...myProperties}>Example</Stack>

const generate = function (mySongs) {
  return mySongs.map((el, index) => (
    <ListItem
      key={index}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          component={Link}
          to={`cancion/${index}`}
        >
          <LaunchIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar alt={el.artist} src={el.avatar} />
      </ListItemAvatar>
      <ListItemText primary={el.song} secondary={el.artist} />
    </ListItem>
  ));
};

const ListaCanciones = ({ mySongs, setMySongs }) => {
  return (
    <div>
      {mySongs.length == 0 ? (
        <Stack className="stackAlert">
          <Alert severity="info">Aún no tienes canciones guardadas</Alert>
        </Stack>
      ) : (
        <List>{generate(mySongs)}</List>
      )}
    </div>
  );
};

export default ListaCanciones;
