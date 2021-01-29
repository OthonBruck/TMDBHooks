import React from "react";
import { usePesquisaContext } from "../../context/PesquisaContext";
import ButtonPerso from "../ButtonPerso";
import { useStyles } from "./styles";

export default function Pagination() {
  const { page, setPage, pesquisa } = usePesquisaContext();
  const classes = useStyles();
  return (
    <div className={classes.buttons}>
      <ButtonPerso onClick={() => setPage(page - 1)} disabled={page === 1}>
        PREVIOUS
      </ButtonPerso>
      <ButtonPerso
        onClick={() => setPage(page + 1)}
        disabled={page === pesquisa.total_pages}
      >
        NEXT
      </ButtonPerso>
    </div>
  );
}
