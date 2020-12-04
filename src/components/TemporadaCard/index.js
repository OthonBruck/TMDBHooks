import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import teste from "../../assets/images/not.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  gridContainer: {
    width: 1000,
    marginTop: 10,
    flexWrap: "wrap",
    background: "#424242",
    color: "white",
    border: "2px solid black",
    borderRadius: "5px",
    padding: theme.spacing(1),
  },
  gridItem: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  root: {
    width: "400px",
    height: 545,
    flexWrap: "wrap",
    background: "#424242",
    margin: "5px",
    color: "white",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  foto: {
    display: "flex",
    justifyContent: "center",
    margin: 10,
  },
  gridCard: {
    marginTop: 3,
  },
  media: {
    width: "250px",
    height: "365px",
  },
}));

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
