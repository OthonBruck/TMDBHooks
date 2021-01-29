import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Formatters from "../../utils/formatters";
import MediaCard from "../MediaCard";
import { useStyles } from "./styles";

export default function TemporadaCard({ a }) {
  const classes = useStyles();
  return (
      <li>
        <Grid container>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography>Temporada</Typography>
              <Grid item xs={12} className={classes.gridCard}>
                <Typography variant="h5" component="h2">
                  {a.name}
                </Typography>
              </Grid>
              <Grid item xs={12} className={classes.foto}>
                <MediaCard image={a.poster_path} />
              </Grid>
              <Grid item xs={12} className={classes.gridCard}>
                <Typography variant="body2" component="p">
                  Primeira vez ao ar: {Formatters.formatDate(a.air_date)}
                  <br />
                  Número de episodios: {a.episode_count}
                  <br />
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </li>
  );
}
