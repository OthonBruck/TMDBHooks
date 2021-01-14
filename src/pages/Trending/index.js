import React from "react";
import { usePesquisaContext } from "../../context/PesquisaContext";
import CardWrapper from "./../../components/CardWrapper/index";
import Menu from "../../components/Menu/index";

export default function Trending() {
  const { dado } = usePesquisaContext();
  return (
    <div>
      <Menu />
      <CardWrapper lista={dado} link={""} />
    </div>
  );
}
