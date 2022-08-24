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

import "./ListaCanciones/ListaCanciones.css";

const myStyle = {width: "100%"}
const myProperties = {sx: myStyle, spacing:2}

const generate = function (mySongs) {
  return mySongs.map((el, index) => (
    <ListItem
      key={index}
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar alt={el.artist} rsc={el.Avatar}/>
          
      </ListItemAvatar>
      <ListItemText primary={el.song} secondary={el.artist}/>
    </ListItem>
  ));
}

const ListaCanciones = ({ mySongs, setMySongs }) => {
  return (
    <div>
      {mySongs.length == 0 ? (
        <Stack {...myProperties}>
          <Alert severity="error" className="alert">
            Aún no tienes canciones guardadas
          </Alert>
        </Stack>
      ) : (
        <List>{generate(mySongs)}</List>
      )}
    </div>
  );
};

export default ListaCanciones;
