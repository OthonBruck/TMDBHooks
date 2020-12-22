import React from "react";
import Menu from "../../components/Menu/index";
import Pesquisa from "../../components/Pesquisa/index";
import { usePesquisaContext } from "../../context/PesquisaContext";
import CardWrapper from "../../components/CardWrapper/index";

export default function PesquisaPage() {
  const { pesquisa } = usePesquisaContext();
  return (
    <div>
      <Menu />
      <Pesquisa />
      <CardWrapper lista={pesquisa} />
    </div>
  );
}
