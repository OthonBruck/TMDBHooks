import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";
import ButtonFavorite from "../ButtonFavorite/index";
import ButtonReturn from "../ButtonReturn";
import DataDetalhe from "../DataDetalhe";
import DescricaoDetalhe from "../DescricaoDetalhe";
import GenresDetalhe from "../GenresDetalhe";
import ImageDetalhe from "../ImageDetalhe";
import ModalVideo from "../ModalVideo";
import TemporadaCard from "../TemporadaCard/index";
import { useStyles } from "./styles";

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
            <ImageDetalhe image={dado.poster_path} height="550px" />
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <GenresDetalhe dado={dado.genres} />
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <ModalVideo results={dado} title={dado.name} />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <DataDetalhe
              text={"Primeira vez ao ar"}
              dado={dado.first_air_date}
            />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <DescricaoDetalhe dado={dado.overview} text={"Descrição"} />
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
