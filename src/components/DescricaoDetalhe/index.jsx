import { Typography } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";

export default function DescricaoDetalhe({ dado, text }) {
  return (
<Fragment>
      {dado !== "" ? (
        <Typography variant="body1" component="h2" gutterBottom style={{marginTop: 8}}>
          {text}: {dado}
        </Typography>
      ) : (
        <Typography variant="body1" component="h2" style={{marginTop: 8}}>
          {text}: Não há descrição
        </Typography>
      )}
    </Fragment>
  );
}
