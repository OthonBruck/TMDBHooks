import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import { CardMedia, Grid, makeStyles } from "@material-ui/core";
import teste from "../../assets/images/not.jpg";

const useStyles = makeStyles({
  root: {
    width: "400px",
    height: 535,
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
  foto: {
    display: "flex",
    justifyContent: "center",
    margin: 10,
  },
  gridItem: {
    marginTop: 3,
  },
  media: {
    width: "250px",
    height: "365px",
  },
});

export default function Index({ result }) {
  const classes = useStyles();
  console.log(result.poster_path);
  return (
    <li>
      <Grid container className={classes.gridContainer}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography>Serie</Typography>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography variant="h5" component="h2">
                {result.name}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.foto}>
              <div>
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
                    image={teste}
                  />
                )}
              </div>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Typography variant="body2" component="p">
                Popularidade: {result.popularity}
                <br />
                Media de Votos: {result.vote_average}
                <br />
                Data Lançamento: {result.first_air_date}
                <br />
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </li>
  );
}
