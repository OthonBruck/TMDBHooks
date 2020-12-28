import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import NotFound from "../../assets/images/not.jpg";
import api from "../../services/api";
import Formatters from "../../utils/formatters";
import ButtonFavorite from "../ButtonFavorite/index";
import TemporadaCard from "../TemporadaCard/index";
import { useStyles } from "./styles";
import { endpoints } from "../../services/endpoints";
import ButtonReturn from "../ButtonReturn";

export default function SerieDetalhe({ match, link }) {
  const classes = useStyles();
  const [dado, setDado] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const response = await api.get(
        endpoints.tv + match.params.id + endpoints.apiTotal
      );
      setDado(response.data);
    };
    fetchItem();
  }, [match.params.id]);

  return (
    <div>
      <div className={classes.container}>
        <Grid container spacing={0} className={classes.gridContainer}>
          <Grid item xs={12}>
            <ButtonReturn link={link} />
          </Grid>
          <Grid item xs={12}>
            <h1>{dado.name}</h1>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            {dado.poster_path !== null ? (
              <img
                height="550px"
                src={"https://image.tmdb.org/t/p/original" + dado.poster_path}
                alt={dado.name}
              />
            ) : (
              <img height="550px" src={NotFound} alt="Imagem não encontrada" />
            )}
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            {dado.genres && dado.genres.length === 0 ? (
              <h4>Generos: Não há informações de generos</h4>
            ) : (
              <h4>
                Generos:{" "}
                {dado.genres && dado.genres.map((a) => a.name).join(", ")}
              </h4>
            )}
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            {dado.first_air_date !== null ? (
              <h4>
                Primeira vez ao ar: {Formatters.formatDate(dado.first_air_date)}
              </h4>
            ) : (
              <h4>Primeira vez ao ar: Não há informações de data</h4>
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
          <Grid item xs={12} className={classes.gridItem}>
            <ButtonFavorite data={dado} />
          </Grid>
        </Grid>
      </div>
      <ul className={classes.lista}>
        {dado.seasons &&
          dado.seasons.map((a) => {
            return <TemporadaCard a={a} />;
          })}
      </ul>
    </div>
  );
}
