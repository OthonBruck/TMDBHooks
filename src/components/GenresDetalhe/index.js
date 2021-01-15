import React from "react";

export default function GenresDetalhe({ dado }) {
  return (
    <div>
      {dado && dado.length === 0 ? (
        <h4>Generos: Não há informações de generos</h4>
      ) : (
        <h4>Generos: {dado && dado.map((a) => a.name).join(", ")}</h4>
      )}
    </div>
  );
}
