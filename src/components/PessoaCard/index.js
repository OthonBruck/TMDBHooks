import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Grid, makeStyles } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    width: "400px",
    height: 525,
    flexWrap: "wrap",
    background: "#424242",
    margin: "5px",
    color: "white",
    "&:hover": {
      opacity: 0.9,
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {},
  foto: {
    display: "flex",
    justifyContent: "center",
    margin: 10,
  },
  gridItem: {
    marginTop: 3,
  },
});

export default function Index({ result }) {
  const classes = useStyles();
  return (
    <li>
      <Grid container className={classes.gridContainer}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography>Pessoa</Typography>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography variant="h5" component="h2">
                {result.name}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.foto}>
              <img
                width="250px"
                className={classes.media}
                src={
                  "https://image.tmdb.org/t/p/original" + result.profile_path
                }
              />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography variant="body2" component="p">
                Popularidade: {result.popularity}
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </li>
  );
}
