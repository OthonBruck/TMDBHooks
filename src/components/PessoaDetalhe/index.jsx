import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";
import ButtonFavorite from "../ButtonFavorite/index.jsx";
import ButtonReturn from "../ButtonReturn/index";
import DataDetalhe from "../DataDetalhe";
import DescricaoDetalhe from "../DescricaoDetalhe";
import ImageDetalhe from "../ImageDetalhe";
import { useStyles } from "./styles";

export default function PessoaDetalhe({ match, link }) {
  const classes = useStyles();
  const [dado, setDado] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await api.get(endpoints.personDetails(match.params.id));
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
            {dado.name}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <ImageDetalhe image={dado.profile_path} height="500px" />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <DescricaoDetalhe dado={dado.biography} text={"Biografia"} />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <DataDetalhe text={"Data de Aniversario"} dado={dado.birthday} />
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          {dado.place_of_birth !== "" ? (
            <Typography
              variant="body1"
              component="h2"
              style={{ marginTop: 8 }}
              gutterBottom
            >
              Local de Nascimento: {dado.place_of_birth}
            </Typography>
          ) : (
            <Typography
              variant="body1"
              component="h2"
              style={{ marginTop: 8 }}
              gutterBottom
            >
              Local de Nascimento: Sem informações de local
            </Typography>
          )}
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography
            variant="body1"
            component="h2"
            style={{ marginTop: 8 }}
            gutterBottom
          >
            Popularidade: {dado.popularity}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <ButtonFavorite data={dado} />
        </Grid>
      </Grid>
    </div>
  );
}
