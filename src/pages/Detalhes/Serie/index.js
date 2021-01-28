import React, { useEffect, useState } from "react";
import CardWrapper from "../../../components/CardWrapper";
import Menu from "../../../components/Menu/index";
import SerieDetalhe from "../../../components/SerieDetalhe/index";
import api from "../../../services/api";
import { endpoints } from "../../../services/endpoints";

export default function SeriePage({ match }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchCast() {
      const response = await api.get(endpoints.tvCast(match.params.id));
      setCast(response.data.cast);
    }
    fetchCast();
  }, [match.params.id]);
  return (
    <div>
      <Menu />
      {match.path === "/favoritos/serie/:id" ? (
        <SerieDetalhe match={match} link={"/favoritos"} />
      ) : match.path === "/pesquisa/serie/:id" ? (
        <SerieDetalhe match={match} link={"/pesquisa"} />
      ) : (
        <SerieDetalhe match={match} link={"/"} />
      )}

      <p>ELENCO</p>
      <CardWrapper
        lista={cast.slice(0, 5)}
        link={""}
        height={505}
        width={350}
      />

      <button onClick={() => window.history.back()}>ddd</button>
    </div>
  );
}
