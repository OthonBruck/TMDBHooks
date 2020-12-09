import { makeStyles } from "@material-ui/core";
import React from "react";
import FilmesCard from "../FilmesCard/index";
import SerieCard from "../SerieCard/index";
import PessoaCard from "../PessoaCard/index";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  lista: {
    display: "flex",
    listStyleType: "none",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
  },
}));

export default function Index({ lista }) {
  const classes = useStyles();

  return (
    <div>
      <ul className={classes.lista}>
        {lista.map((result) => {
          return result.first_air_date ? (
            <Link className={classes.link} to={`/pesquisa/serie/${result.id}`}>
              <SerieCard key={result.id} result={result} />
            </Link>
          ) : result.known_for ? (
            <Link className={classes.link} to={`/pesquisa/pessoa/${result.id}`}>
              <PessoaCard key={result.id} result={result} />
            </Link>
          ) : (
            <Link className={classes.link} to={`/pesquisa/filme/${result.id}`}>
              <FilmesCard key={result.id} result={result} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
