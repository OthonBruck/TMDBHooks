import { Button } from "@material-ui/core";
import React from "react";
import { usePesquisaContext } from "../../context/PesquisaContext";
import { useStyles } from "./styles";

export default function Pagination() {
  const { page, setPage } = usePesquisaContext();
  const classes = useStyles();
  console.log(page);
  return (
    <div className={classes.buttons}>
      <Button variant="contained" onClick={() => setPage(page - 1)}>
        PREVIOUS
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setPage(page + 1)}
      >
        NEXT
      </Button>
    </div>
  );
}
