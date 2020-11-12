import React from "react";
import { usePesquisaContext } from "../../context/PesquisaContext";

export default function Index() {
  const { pesquisa } = usePesquisaContext();

  return (
    <div>
      <ul>
        {pesquisa.map((task, index) => (
          <h1>{task.vote_average}</h1>
        ))}
      </ul>
    </div>
  );
}
