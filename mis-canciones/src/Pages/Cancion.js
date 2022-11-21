import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import "../App.css";
import { useNavigate } from "react-router-dom";

const Cancion = ({ mySongs }) => {
  const { id } = useParams();
  const song = mySongs[id];

  const navigate = useNavigate();

  const handleHomeButton = () => {
    navigate("/");
  };

  return (
    <>
      <div className="LetraGoHome">
        <Button
          variant="outlined"
          startIcon={<HomeIcon />}
          onClick={handleHomeButton}
        >
          Back
        </Button>
      </div>
      <Card className="LetraRoot">
        <CardMedia
          className="LetraMedia"
          component="img"
          height="20%"
          image={song.avatar}
          alt={`${song.artist} picture profile`}
          title={song.artist}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            className="LetraTitle"
          >
            {song.artist + " - " + song.song}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="p"
            className="LetraLyric"
          >
            {song.lyric}
          </Typography>
        </CardContent>
        {/* <CardActions className="LetraAddBtn">
          <Button size="small" color="primary" onClick={handleHomeButton}>
            Volver
          </Button>
        </CardActions> */}
      </Card>
      <div className="LetraGoHome">
        <Button
          variant="outlined"
          startIcon={<HomeIcon />}
          onClick={handleHomeButton}
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default Cancion;
