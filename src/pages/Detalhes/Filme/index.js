import React, { useEffect, useState } from "react";
import Menu from "../../../components/Menu/index";
import FilmeDetalhe from "../../../components/FilmeDetalhe/index";
import { endpoints } from "../../../services/endpoints";
import api from "../../../services/api";
import CardWrapper from "../../../components/CardWrapper";

export default function FilmePage({ match }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      const response = await api.get(endpoints.movieCast(match.params.id));
      setCast(response.data.cast);
    }
    fetchCast();
  }, [match.params.id]);

  return (
    <div>
      <Menu />
      {match.path === "/favoritos/filme/:id" ? (
        <FilmeDetalhe match={match} link={"/favoritos"} />
      ) : match.path === "/pesquisa/filme/:id" ? (
        <FilmeDetalhe match={match} link={"/pesquisa"} />
      ) : (
        <FilmeDetalhe match={match} link={"/"} />
      )}
      <p>ELENCO</p>
      <CardWrapper
        lista={cast.slice(0, 5)}
        link={""}
        height={505}
        width={350}
      />
    </div>
  );
}
