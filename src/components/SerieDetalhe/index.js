import { Grid, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";

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
  },
}));

export default function Index({ match }) {
  const classes = useStyles();
  const [dado, setDado] = useState({});

  const fetchItem = async () => {
    const response = await api.get(
      "https://api.themoviedb.org/3/tv/" +
        match.params.id +
        "?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR"
    );
    setDado(response.data);
  };

  useEffect(() => {
    fetchItem();
    console.log(match.params.id);
  }, []);

  return (
    <div className={classes.container}>
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs={12}>
          <h1>{dado.name}</h1>
        </Grid>
        <Grid item xs={12} className={classes.gridItem} justify="center">
          <img
            height="550px"
            src={"https://image.tmdb.org/t/p/original" + dado.poster_path}
            alt={dado.name}
          />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <h4>Gêneros: {"..."}</h4>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <h4>Primeira vez ao ar: {dado.first_air_date}</h4>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <h4>Descrição: {dado.overview}</h4>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <h4>Media de Votos: {dado.vote_average}</h4>
        </Grid>
        <Grid item xs={12} className={classes.gridItem} justify="center">
          <Button variant="contained" color="primary">
            Adicionar Favorito
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
