import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: "1px solid #3C3C3C",
    background: "#212121",
    color: "white",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: "none",
    color: "white",
    fontSize: 20,
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default function Index() {
  const classes = useStyles();

  return (
    <div className={classes.lista}>
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
              to="/pesquisa"
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
