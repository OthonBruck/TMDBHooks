import React from "react";

export default function DescricaoDetalhe({ dado, text }) {
  return (
    <div>
      {dado !== "" ? (
        <h4>
          {text}: {dado}
        </h4>
      ) : (
        <h4>{text}: Não há descrição</h4>
      )}
    </div>
  );
}
