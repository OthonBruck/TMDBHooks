import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";
import ButtonFavorite from "../ButtonFavorite/index.jsx";
import ButtonReturn from "../ButtonReturn";
import DataDetalhe from "../DataDetalhe";
import DescricaoDetalhe from "../DescricaoDetalhe";
import GenresDetalhe from "../GenresDetalhe";
import ImageDetalhe from "../ImageDetalhe";
import ModalVideo from "../ModalVideo";
import TemporadaCard from "../TemporadaCard/index";
import { useStyles } from "./styles";

export default function SerieDetalhe({ match }) {
  const classes = useStyles();
  const [dado, setDado] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await api.get(endpoints.tvDetails(match.params.id));
      setDado(response.data);
    };
    fetchDetails();
  }, [match.params.id]);

  return (
    <Fragment>
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
            {dado.name}
          </Typography>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <ImageDetalhe image={dado.poster_path} height="550px" />
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <GenresDetalhe dado={dado.genres} />
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
            <ModalVideo results={dado} title={dado.name} />
          </Grid>
        </Grid>
      </div>
      <ul className={classes.lista}>
        {dado.seasons &&
          dado.seasons.map((a) => {
            return <TemporadaCard a={a} key={a.id} />;
          })}
      </ul>
    </Fragment>
  );
}
