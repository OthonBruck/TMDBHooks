import Button from "@material-ui/core/Button";
import React from "react";
import { useStyles } from "./styles";

export default function ButtonReturn() {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.history.back()}
      >
        VOLTAR
      </Button>
    </div>
  );
}
