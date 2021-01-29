import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";
import ButtonFavorite from "../ButtonFavorite/index.jsx";
import ButtonReturn from "../ButtonReturn/index.jsx";
import DataDetalhe from "../DataDetalhe";
import DescricaoDetalhe from "../DescricaoDetalhe";
import GenresDetalhe from "../GenresDetalhe";
import ImageDetalhe from "../ImageDetalhe";
import ModalVideo from "../ModalVideo";
import { useStyles } from "./styles";

export default function FilmeDetalhe({ match }) {
  const classes = useStyles();
  const [dado, setDado] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
        const response = await api.get(endpoints.movieDetails(match.params.id));
        setDado(response.data);
    };
    fetchDetails();
  }, [match.params.id]);

  return (
    <div className={classes.container}>
      <Grid container spacing={0} className={classes.gridContainer}>
        <Grid item xs={12}>
          <ButtonReturn />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h2"
            style={{ marginTop: 8 }}
            gutterBottom
          >
            {dado.title}
          </Typography>
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
          <Typography
            variant="body1"
            component="h2"
            style={{ marginTop: 8 }}
            gutterBottom
          >
            Media de Votos: {dado.vote_average}
          </Typography>
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
