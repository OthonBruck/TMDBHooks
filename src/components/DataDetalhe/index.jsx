import { Typography } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import Formatters from "../../utils/formatters";

export default function DataDetalhe({ dado, text }) {
  return (
    <Fragment>
      {/* TODO: h4 para typography */}
      {dado !== ("" || null) ? (
        <Typography
          variant="body1"
          component="h2"
          gutterBottom
          style={{ marginTop: 8 }}
        >
          {text}: {Formatters.formatDate(dado)}
        </Typography>
      ) : (
        <Typography variant="body1" component="h2" style={{ marginTop: 8 }}>
          {text}: Não há informações de data
        </Typography>
      )}
    </Fragment>
  );
}
