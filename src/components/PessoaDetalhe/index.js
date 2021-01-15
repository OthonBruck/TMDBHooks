import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";
import ButtonFavorite from "../ButtonFavorite/index";
import ButtonReturn from "../ButtonReturn";
import DataDetalhe from "../DataDetalhe";
import DescricaoDetalhe from "../DescricaoDetalhe";
import ImageDetalhe from "../ImageDetalhe";
import { useStyles } from "./styles";

export default function PessoaDetalhe({ match, link }) {
  const classes = useStyles();
  const [dado, setDado] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      const response = await api.get(
        endpoints.person + match.params.id + endpoints.apiTotal
      );
      setDado(response.data);
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
          <h1>{dado.name}</h1>
        </Grid>
        <Grid item xs={12} className={classes.gridItem} justify="center">
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
