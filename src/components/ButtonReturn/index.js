import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

export default function ButtonReturn({ link }) {
  const classes = useStyles();
  return (
    <div>
      <Link className={classes.link} to={link}>
        <Button variant="contained" color="primary">
          VOLTAR
        </Button>
      </Link>
    </div>
  );
}
