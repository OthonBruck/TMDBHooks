import React from "react";
import Loading from "../../assets/images/loading.gif";
import { useStyles } from "./styles";

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.center}>
      <img width="300px" src={Loading} alt="imagem" />
    </div>
  );
}
