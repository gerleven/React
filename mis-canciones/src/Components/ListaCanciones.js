import React from 'react';

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

import "./ListaCanciones/ListaCanciones.css"

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const ListaCanciones = ({ mySongs, setMySongs }) => {
  return (
    <div>
      {mySongs.length == 0 ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error" className="alert">Aún no tienes canciones guardadas</Alert>
        </Stack>
      ) : (
        <List>
          Lista de canciones
          {/* {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                  />
                </ListItem>,
              )} */}
        </List>
      )}
    </div>
  );
};

export default ListaCanciones;
