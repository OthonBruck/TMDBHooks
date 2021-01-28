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
import ModalVideo from "../ModalVideo";
import { useStyles } from "./styles";

export default function FilmeDetalhe({ match, link }) {
  const classes = useStyles();
  const [dado, setDado] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await api.get(endpoints.movieDetails(match.params.id));
        setDado(response.data);
      } catch (error) {}
    };
    fetchItem();
  }, [match.params.id]);

  return (
    <div className={classes.container}>
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs={12}>
          <ButtonReturn />
        </Grid>
        <Grid item xs={12}>
          <h1>{dado.title}</h1>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
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
        <Grid item xs={6} className={classes.gridItem}>
          <ButtonFavorite data={dado} />
        </Grid>
        <Grid item xs={6} className={classes.gridItem}>
          <ModalVideo results={dado} title={dado.title} />
        </Grid>
      </Grid>
    </div>
  );
}
