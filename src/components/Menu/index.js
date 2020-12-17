import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

export default function Index() {
  const classes = useStyles();

  return (
    <div>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            TMDB
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              to="/"
              className={classes.link}
            >
              Trending
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="/pesquisa"
              className={classes.link}
            >
              Pesquisa
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="/favoritos"
              className={classes.link}
            >
              Favoritos
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}
