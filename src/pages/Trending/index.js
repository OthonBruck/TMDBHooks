import React from "react";
import { usePesquisaContext } from "../../context/PesquisaContext";
import CardWrapper from "./../../components/CardWrapper/index";

export default function Index() {
  const { dado } = usePesquisaContext();
  return (
    <div>
      <CardWrapper lista={dado} />
    </div>
  );
}
