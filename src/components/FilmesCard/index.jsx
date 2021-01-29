import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Fragment } from "react";
import MediaCard from "../MediaCard";
import { useStyles } from "./styles";

export default function FilmesCard({ result, height, width }) {
  const classes = useStyles();
  return (
    <Fragment>
      <li key={result.id}>
        <Card className={classes.root} style={{ width: width, height: height }}>
          <CardContent>
            <Typography>Filme</Typography>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography variant="h5" component="h2" className={classes.title}>
                {result.title}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.foto}>
              <MediaCard image={result.poster_path} />
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
      </Fragment>
  );
}
