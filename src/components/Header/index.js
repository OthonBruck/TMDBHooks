import { makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  lista: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#212121",
    color: "white",
    padding: theme.spacing(1),
  },
  nav: {
    color: "white",
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.lista}>
      <h3>TMDB</h3>
      <ul>
        <Link className={classes.nav} to="/">
          <li>Home</li>
        </Link>
        <Link className={classes.nav} to="/pesquisa">
          <li>Pesquisa</li>
        </Link>
        <Link className={classes.nav} to="/pesquisa">
          <li>Sobre</li>
        </Link>
      </ul>
    </div>
  );
}
