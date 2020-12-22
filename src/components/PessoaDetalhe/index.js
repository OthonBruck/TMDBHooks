import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import NotFound from "../../assets/images/not.jpg";
import api from "../../services/api";
import Formatters from "../../utils/formatters";
import ButtonFavorite from "../ButtonFavorite/index";
import { useStyles } from "./styles";

export default function Index({ match }) {
  const classes = useStyles();
  const [dado, setDado] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const response = await api.get(
        "https://api.themoviedb.org/3/person/" +
          match.params.id +
          "?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR"
      );
      setDado(response.data);
    };
    fetchItem();
  }, [match.params.id]);

  return (
    <div className={classes.container}>
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs={12}>
          <h1>{dado.name}</h1>
        </Grid>
        <Grid item xs={12} className={classes.gridItem} justify="center">
          {dado.profile_path && dado.profile_path !== null ? (
            <img
              height="500px"
              src={"https://image.tmdb.org/t/p/original" + dado.profile_path}
              alt={dado.name}
            />
          ) : (
            <img height="500px" src={NotFound} alt="Imagem não encontrada" />
          )}
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          {dado.biography !== "" ? (
            <h4>Biografia: {dado.biography}</h4>
          ) : (
            <h4>Biografia: Não há biografia</h4>
          )}
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          {dado.birthday !== null ? (
            <h4>Data de Aniversario: {Formatters.formatDate(dado.birthday)}</h4>
          ) : (
            <h4>Data de Aniversario: Sem informações de data</h4>
          )}
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          {dado.place_of_birth !== null ? (
            <h4>Local de Nascimento: {dado.place_of_birth}</h4>
          ) : (
            <h4>Local de Nascimento: Sem informações de local</h4>
          )}
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <h4>Popularidade: {dado.popularity}</h4>
        </Grid>
        <Grid item xs={12} className={classes.gridItem} justify="center">
          <ButtonFavorite data={dado} />
        </Grid>
      </Grid>
    </div>
  );
}
