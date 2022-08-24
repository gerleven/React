import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { styled } from "@mui/material/styles";
import "./Letra.css";

const MyCard = styled(Card)(() => ({ maxWidth: 345 }));

const Letra = ({ currentSong, setCurrentSong, mySongs, setMySongs, setSearch }) => {
  // const classes = {
  //   root: {
  //     maxWidth: 800,
  //     margin: "2rem auto",
  //   },
  //   lyrics: {
  //     whiteSpace: "pre-wrap !important",
  //   },
  //   title: {
  //     marginBottom: "3rem !important",
  //   },
  //   media: {
  //     backgroundSize: "cover",
  //     height: "50vh",
  //   },
  //   addBtn: {
  //     justifyContent: "flex-end",
  //   },
  //   asd: {
  //     color: "red",
  //   },
  // };

  const handleClick = (event) => {
    setCurrentSong({ artist: "", avatar: "", song: "", lyric: "" });
    setSearch({ artist: "", song: "", request: false });
    setMySongs([...mySongs, currentSong]);
  };

  return (
    <MyCard className="root">
      <CardActionArea>
        <CardMedia
          className="media"
          component="img"
          height="140"
          image={currentSong.avatar}
          alt={`${currentSong.artist} picture profile`}
          title={currentSong.artist}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            className="title"
          >
            {currentSong.artist + " - " + currentSong.song}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="p"
            className="lyric"
          >
            {currentSong.lyric}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="addBtn">
        <Button size="small" color="primary" onClick={handleClick}>
          Agregar
        </Button>
      </CardActions>
    </MyCard>
  );
};

export default Letra;
