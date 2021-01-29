import Button from "@material-ui/core/Button";
import React from "react";
import { useStyles } from "./styles";

export default function ButtonPerso({ children, ...rest }) {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.buttons} {...rest}>
        {children}
      </Button>
    </div>
  );
}
