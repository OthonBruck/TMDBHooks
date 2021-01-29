import React from "react";
import Alert from "@material-ui/lab/Alert";
import { useStyles } from "./styles";
import { Fragment } from "react";

export default function Errormessage({ errors }) {
  const classes = useStyles();
  return (
    <Fragment>
      {errors.pesquisa &&
        (errors.pesquisa.message !== undefined ? (
          <Alert className={classes.alert} variant="filled" severity="error">
            {errors.pesquisa.message}
          </Alert>
        ) : null)}
    </Fragment>
  );
}
