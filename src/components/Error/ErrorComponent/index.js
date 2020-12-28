import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export default function ErrorComponent({ mensagem }) {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <Grid container className={classes.Grid} spacing={3}>
        <Grid item xs={12} className={classes.gridItem}>
          <Typography>{mensagem}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}
