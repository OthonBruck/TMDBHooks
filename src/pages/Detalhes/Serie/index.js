import React from "react";
import Menu from "../../../components/Menu/index";
import SerieDetalhe from "../../../components/SerieDetalhe/index";

export default function SeriePage({ match }) {
  return (
    <div>
      <Menu />
      <SerieDetalhe match={match} />
    </div>
  );
}
