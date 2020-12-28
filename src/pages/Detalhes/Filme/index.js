import React from "react";
import Menu from "../../../components/Menu/index";
import FilmeDetalhe from "../../../components/FilmeDetalhe/index";

export default function FilmePage({ match }) {
  return (
    <div>
      <Menu />
      {match.path === "/favoritos/pessoa/:id" ? (
        <FilmeDetalhe match={match} link={"/favoritos"} />
      ) : match.path === "/pesquisa/pessoa/:id" ? (
        <FilmeDetalhe match={match} link={"/pesquisa"} />
      ) : (
        <FilmeDetalhe match={match} link={"/"} />
      )}
    </div>
  );
}
