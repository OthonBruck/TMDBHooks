import React from "react";
import Formatters from "../../utils/formatters";

export default function DataDetalhe({ dado, text }) {
  return (
    <div>
      {dado !== ("" || null) ? (
        <h4>
          {text}: {Formatters.formatDate(dado)}
        </h4>
      ) : (
        <h4>{text}: Não há informações de data</h4>
      )}
    </div>
  );
}
