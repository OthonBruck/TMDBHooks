import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    width: "500px",
    flexWrap: "wrap",
    background: "#424242",
    margin: "5px",
    color: "white",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {},
});

export default function Index({ result }) {
  const classes = useStyles();
  return (
    <li>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography>Pessoa</Typography>
          <Typography variant="h5" component="h2">
            {result.name}
          </Typography>
          <img
            width="250px"
            className={classes.media}
            src={"https://image.tmdb.org/t/p/original" + result.profile_path}
          />
          <Typography variant="body2" component="p">
            Popularidade: {result.popularity}
          </Typography>
        </CardContent>
      </Card>
    </li>
  );
}
