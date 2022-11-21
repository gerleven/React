import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";
import "../App.css";

const MyCard = styled(Card)(() => ({
  borderRadius: "20px",
}));

const Letra = ({
  currentSong,
  setCurrentSong,
  mySongs,
  setMySongs,
  setSearch,
}) => {
  const handleClickAgregar = (event) => {
    setMySongs([...mySongs, currentSong]);
    setCurrentSong({});
    setSearch({ artist: "", song: "", request: false });
  };

  return (
    <MyCard className="LetraRoot">
      <CardMedia
        className="LetraMedia"
        component="img"
        height="20%"
        image={currentSong.avatar}
        alt={`${currentSong.artist} picture profile`}
        title={currentSong.artist}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="h2"
          className="LetraTitle"
        >
          {currentSong.artist + " - " + currentSong.song}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          component="p"
          className="LetraLyric"
        >
          {currentSong.lyric}
        </Typography>
      </CardContent>

      <CardActions className="LetraAddBtn">
        <Button size="small" color="primary" onClick={handleClickAgregar}>
          Add
        </Button>
      </CardActions>
    </MyCard>
  );
};

export default Letra;
