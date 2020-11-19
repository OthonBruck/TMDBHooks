import { makeStyles } from "@material-ui/core";
import React from "react";
import { usePesquisaContext } from "../../context/PesquisaContext";
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
}));

export default function Index() {
  const { pesquisa, tipo } = usePesquisaContext();
  const classes = useStyles();

  return (
    <div>
      <ul className={classes.lista}>
        {pesquisa.map((result) => {
          if (tipo === "pessoa") {
            return (
              <Link to={`/pesquisa/pessoa/${result.id}`}>
                <PessoaCard key={result.id} result={result} />
              </Link>
            );
          } else if (tipo === "filme") {
            return (
              <Link to={`/pesquisa/filme/${result.id}`}>
                <FilmesCard key={result.id} result={result} />
              </Link>
            );
          } else if (tipo === "serie") {
            return (
              <Link to={`/pesquisa/serie/${result.id}`}>
                <SerieCard key={result.id} result={result} />
              </Link>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
}
