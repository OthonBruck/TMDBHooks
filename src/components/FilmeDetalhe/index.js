import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";
import Button from "@material-ui/core/Button";

export default function Index({ match }) {
  const [dado, setDado] = useState({});

  const fetchItem = async () => {
    const response = await api.get(
      "https://api.themoviedb.org/3/movie/" +
        match.params.id +
        "?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR"
    );
    setDado(response.data);
  };

  useEffect(() => {
    fetchItem();
    console.log(match.params.id);
  }, [match.params.id]);

  return (
    <div>
      <h1>{dado.title}</h1>
      <img
        height="550px"
        src={"https://image.tmdb.org/t/p/original" + dado.poster_path}
      ></img>
      <h4>Gêneros: {"..."}</h4>
      <h4>Data de Lançamento: {dado.release_date}</h4>
      <h4>Descrição: {dado.overview}</h4>
      <h4>Media de Votos: {dado.vote_average}</h4>
      <Button>Adicionar Favorito</Button>
    </div>
  );
}
