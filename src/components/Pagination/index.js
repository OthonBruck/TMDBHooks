import { Button } from "@material-ui/core";
import React from "react";
import { usePesquisaContext } from "../../context/PesquisaContext";

export default function Pagination() {
  const { page, setPage } = usePesquisaContext();
  return (
    <div>
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
