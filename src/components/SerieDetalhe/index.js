import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useEffect, useState } from "react";
import teste from "../../assets/images/not.jpg";
import { usePesquisaContext } from "../../context/PesquisaContext";
import api from "../../services/api";
import TemporadaCard from "../TemporadaCard/index";
import { useStyles } from "./styles";

export default function Index({ match }) {
  const classes = useStyles();
  const [dado, setDado] = useState({});
  const {
    favoritos,
    adicionarFavorito,
    removerFavorito,
  } = usePesquisaContext();

  useEffect(() => {
    const fetchItem = async () => {
      const response = await api.get(
        "https://api.themoviedb.org/3/tv/" +
          match.params.id +
          "?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR"
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
              <img height="550px" src={teste} alt="Imagem não encontrada" />
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
              <h4>Primeira vez ao ar: {dado.first_air_date}</h4>
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
            {favoritos.find((dados) => dados.id === dado.id) !== undefined ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => removerFavorito(dado.id)}
              >
                Remover Favorito
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => adicionarFavorito(dado)}
              >
                Adicionar Favorito
              </Button>
            )}
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
