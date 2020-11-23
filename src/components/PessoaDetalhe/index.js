import Button from "@material-ui/core/Button";
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
      "https://api.themoviedb.org/3/person/" +
        match.params.id +
        "?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR"
    );
    setDado(response.data);
  };

  return (
    <div>
      <img
        height="500px"
        src={"https://image.tmdb.org/t/p/original" + dado.profile_path}
      />
      <h4>Biografia:{dado.biography}</h4>
      <h4>Data de Aniversario: {dado.birthday}</h4>
      <h4>Local de Nascimento: {dado.place_of_birth}</h4>
      <h4>Popularidade: {dado.popularity}</h4>
      <Button>Adicionar Favorito</Button>
    </div>
  );
}
