import React from "react";
import CardWrapper from "../../components/CardWrapper/index";
import { usePesquisaContext } from "../../context/PesquisaContext";

export default function Index() {
  const { favoritos } = usePesquisaContext();

  return <CardWrapper lista={favoritos} />;
}
