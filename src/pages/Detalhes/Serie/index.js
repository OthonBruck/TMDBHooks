import React from "react";
import Menu from "../../../components/Menu/index";
import SerieDetalhe from "../../../components/SerieDetalhe/index";

export default function SeriePage({ match }) {
  return (
    <div>
      <Menu />
      {match.path === "/favoritos/pessoa/:id" ? (
        <SerieDetalhe match={match} link={"/favoritos"} />
      ) : match.path === "/pesquisa/pessoa/:id" ? (
        <SerieDetalhe match={match} link={"/pesquisa"} />
      ) : (
        <SerieDetalhe match={match} link={"/"} />
      )}
    </div>
  );
}
