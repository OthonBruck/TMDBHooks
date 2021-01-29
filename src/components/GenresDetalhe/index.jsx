import { Typography } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";

export default function GenresDetalhe({ dado }) {
  return (
    <Fragment>
      {dado && dado.length === 0 ? (
        <Typography
          variant="body1"
          component="h2"
          gutterBottom
          style={{ marginTop: 8}}
        >
          Generos: Não há informações de generos
        </Typography>
      ) : (
        <Typography variant="body1" component="h2" style={{ marginTop: 8 }}>
          Generos: {dado && dado.map((a) => a.name).join(", ")}
        </Typography>
      )}
    </Fragment>
  );
}
