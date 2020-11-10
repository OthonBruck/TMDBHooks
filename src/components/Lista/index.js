import React from "react";
import { usePesquisaContext } from "../../context/PesquisaContext";

export default function Index() {
  const { pesquisa } = usePesquisaContext();

  return (
    <div>
      <ul className={classes.lista}>
        {pesquisa.map((task, index) => (
          <Resultado key={index} task={task} id={index} />
        ))}
      </ul>
    </div>
  );
}
