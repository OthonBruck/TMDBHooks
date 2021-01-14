import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import NotFound from "../../assets/images/not.jpg";
import api from "../../services/api";
import Formatters from "../../utils/formatters";
import ButtonFavorite from "../ButtonFavorite/index";
import { useStyles } from "./styles";
import { endpoints } from "../../services/endpoints";
import ButtonReturn from "../../components/ButtonReturn/index";
import ImageDetalhe from "../ImageDetalhe";

export default function FilmeDetalhe({ match, link }) {
  const classes = useStyles();
  const [dado, setDado] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await api.get(
          endpoints.movie + match.params.id + endpoints.apiTotal
        );
        setDado(response.data);
      } catch (error) {}
    };
    fetchItem();
  }, [match.params.id]);

  return (
    <div className={classes.container}>
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs={12}>
          <ButtonReturn link={link} />
        </Grid>
        <Grid item xs={12}>
          <h1>{dado.title}</h1>
        </Grid>
        <Grid item xs={12} className={classes.gridItem} justify="center">
          <ImageDetalhe image={dado.poster_path} height="550px" />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          {dado.genres && dado.genres.length === 0 ? (
            <h4>Generos: Não há informações de generos</h4>
          ) : (
            <h4>
              Generos:
              {dado.genres && dado.genres.map((a) => a.name).join(", ")}
            </h4>
          )}
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          {dado.release_date !== "" ? (
            <h4>
              Data de Lançamento: {Formatters.formatDate(dado.release_date)}
            </h4>
          ) : (
            <h4>Data de Lançamento: Não há informações de data</h4>
          )}
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          {dado.overview !== "" ? (
            <h4>Descrição: {dado.overview}</h4>
          ) : (
            <h4>Descrição: Não há descrição</h4>
          )}
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <h4>Media de Votos: {dado.vote_average}</h4>
        </Grid>
        <Grid item xs={12} className={classes.gridItem} justify="center">
          <ButtonFavorite data={dado} />
        </Grid>
      </Grid>
    </div>
  );
}
