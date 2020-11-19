import React, { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";

export default function Index({ match }) {
  const [dado, setDado] = useState({});

  useEffect(() => {
    fetchItem();
    console.log(match.params.id);
  }, []);

  const fetchItem = async () => {
    const response = await api.get(
      "https://api.themoviedb.org/3/movie/" +
        match.params.id +
        "?api_key=d61ca0998c8a152c6556e310a4a8e4db&language=pt-BR"
    );
    setDado(response.data);
  };

  return (
    <div>
      <h1>{dado.title}</h1>
    </div>
  );
}
