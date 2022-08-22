import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { styled } from "@mui/material/styles";

const MyCard = styled(Card)(() => ({ maxWidth: 345 }));

const Letra = ({
  currentSong,
  setCurrentSong,
  mySongs,
  setMySongs,
  setSearch,
}) => {

  const classes = {
    root: {
      maxWidth: 800,
      margin: "2rem auto",
    },
    lyrics: {
      whiteSpace: "pre-wrap !important",
    },
    title: {
      marginBottom: "3rem !important",
    },
    media: {
      backgroundSize: "cover",
      height: "50vh",
    },
    addBtn: {
      justifyContent: "flex-end",
    },
    asd: {
      color: "red",
    },
  };

  const handleClick = ()=>{
    
  }

  return (
    <MyCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={currentSong.avatar}
          alt={`${currentSong.artist} picture profile`}
          title={currentSong.artist}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {currentSong.artist + " - " + currentSong.song}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            {currentSong.lyric}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClick}>
          Agregar
        </Button>
      </CardActions>
    </MyCard>
  );
};

export default Letra;
