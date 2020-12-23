import React from "react";
import Alert from "@material-ui/lab/Alert";
import { useStyles } from "./styles";

export default function Errormessage({ errors }) {
  const classes = useStyles();
  return (
    <div>
      {errors.pesquisa &&
        (errors.pesquisa.message !== undefined ? (
          <Alert className={classes.alert} variant="filled" severity="error">
            {errors.pesquisa.message}
          </Alert>
        ) : null)}
    </div>
  );
}
