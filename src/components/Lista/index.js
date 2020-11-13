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

  // dado tipo === pessoa              lista imprima <PessoaCard/>
  // dado tipo === filme              lista imprime <FilmeCard/>
  // dado tipo === serie              lista imprime <SerieCard/>

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
          }
        })}
      </ul>
    </div>
  );
}
