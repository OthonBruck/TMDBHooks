import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import ButtonReturn from "../../components/ButtonReturn/index";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";
import ButtonFavorite from "../ButtonFavorite/index";
import DataDetalhe from "../DataDetalhe";
import DescricaoDetalhe from "../DescricaoDetalhe";
import GenresDetalhe from "../GenresDetalhe";
import ImageDetalhe from "../ImageDetalhe";
import { useStyles } from "./styles";

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
          <Typography component="h1">{dado.title}</Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridItem} justify="center">
          <ImageDetalhe image={dado.poster_path} height="550px" />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <GenresDetalhe dado={dado.genres} />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <DataDetalhe dado={dado.release_date} text={"Data de Lançamento"} />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <DescricaoDetalhe dado={dado.overview} text={"Descrição"} />
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
