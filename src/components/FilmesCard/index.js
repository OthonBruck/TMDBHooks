import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React from "react";
import NotFound from "../../assets/images/not.jpg";
import { useStyles } from "./styles";

export default function Index({ result }) {
  const classes = useStyles();
  return (
    <li>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography>Filme</Typography>
          <Grid item xs={12} className={classes.gridItem}>
            <Typography variant="h5" component="h2">
              {result.title}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.foto}>
            {result.poster_path !== null ? (
              <CardMedia
                className={classes.media}
                component="img"
                image={
                  "https://image.tmdb.org/t/p/original" + result.poster_path
                }
              />
            ) : (
              <CardMedia
                className={classes.media}
                component="img"
                image={NotFound}
              />
            )}
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <Typography variant="body2" component="p">
              Popularidade: {result.popularity}
              <br />
              Media de Voto: {result.vote_average}
              <br />
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </li>
  );
}
