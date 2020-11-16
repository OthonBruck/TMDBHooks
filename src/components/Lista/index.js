import { makeStyles } from "@material-ui/core";
import React from "react";
import { usePesquisaContext } from "../../context/PesquisaContext";
import FilmesCard from "../FilmesCard/index";
import SerieCard from "../SerieCard/index";
import PessoaCard from "../PessoaCard/index";

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
        {pesquisa.map((task, index) => {
          if (tipo === "pessoa") {
            return <PessoaCard />;
          } else if (tipo === "filme") {
            return <FilmesCard />;
          } else if (tipo === "serie") {
            return <SerieCard />;
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );
}
