import React from "react";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { ListItemSecondaryAction } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import AlertDialog from "./AlertDialog";

import "../App.css";

// const myStyle = {
//   width: "60%",
//   margin: "auto",
//   padding: "30px"
// };
// const myProperties = { sx: myStyle, spacing: 2 };
// <Stack {...myProperties}>Example</Stack>
import { useNavigate } from "react-router-dom";

const ListaCanciones = ({ mySongs, setMySongs }) => {
  const deleteSong = (idToDelete) => {
    let newListofSongs = mySongs.filter((song, index) => index != idToDelete);
    setMySongs(newListofSongs);
    localStorage.setItem("mySongs", JSON.stringify(newListofSongs));
  };

  const navigate = useNavigate();
  const handleNavigateClick = (index) => {
    navigate(`cancion/${index}`);
  };

  const generate = function () {
    return mySongs.map((el, index) => (
      <ListItem key={index} className="ListItemCancionDemo" component={Link} to={`cancion/${index}`}>
          <ListItemAvatar>
            <Avatar alt={el.artist} src={el.avatar} />
          </ListItemAvatar>
          <ListItemText primary={el.song} secondary={el.artist} />
          <ListItemSecondaryAction>
            <IconButton edge="end" component={Link} to={`cancion/${index}`}>
              <LaunchIcon />
            </IconButton>
            <AlertDialog id={index} deleteSong={deleteSong} />
          </ListItemSecondaryAction>
      </ListItem>
    ));
  };

  return (
    <div>
      {mySongs.length == 0 ? (
        <Stack className="stackAlert">
          <Alert severity="info">You don't have songs saved</Alert>
        </Stack>
      ) : (
        <List className="ListItemCancionRoot">{generate()}</List>
      )}
    </div>
  );
};

export default ListaCanciones;
