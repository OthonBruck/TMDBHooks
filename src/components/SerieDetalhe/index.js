import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";

export default function Index({ match }) {
  const [dado, setDado] = useState({});

  useEffect(() => {
    fetchItem();
    console.log(match.params.id);
  }, [match.params.id]);

  const fetchItem = async () => {
    const response = await api.get(
      "https://api.themoviedb.org/3/tv/" +
        match.params.id +
        "?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR"
    );
    setDado(response.data);
  };

  return (
    <div>
      <h1>{dado.name}</h1>
      <img
        height="750px"
        src={"https://image.tmdb.org/t/p/original" + dado.poster_path}
      />
      <h4>Gêneros: {"..."}</h4>
      <h4>Primeira vez ao ar: {dado.first_air_date}</h4>
      <h4>Descrição: {dado.overview}</h4>
      <h4>Media de Votos: {dado.vote_average}</h4>
    </div>
  );
}
