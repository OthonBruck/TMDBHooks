import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import teste from "../../assets/images/not.jpg";
import { useStyles } from "./styles";

export default function Index({ a }) {
  const classes = useStyles();
  return (
    <div>
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
                {a.poster_path !== null ? (
                  <CardMedia
                    className={classes.media}
                    component="img"
                    image={
                      "https://image.tmdb.org/t/p/original" + a.poster_path
                    }
                  />
                ) : (
                  <CardMedia
                    className={classes.media}
                    component="img"
                    image={teste}
                  />
                )}
              </Grid>
              <Grid item xs={12} className={classes.gridCard}>
                <Typography variant="body2" component="p">
                  Primeira vez ao ar: {a.air_date}
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
    </div>
  );
}
