import React from "react";
import Menu from "../../../components/Menu/index";
import FilmeDetalhe from "../../../components/FilmeDetalhe/index";

export default function FilmePage({ match }) {
  return (
    <div>
      <Menu />
      <FilmeDetalhe match={match} />
    </div>
  );
}
