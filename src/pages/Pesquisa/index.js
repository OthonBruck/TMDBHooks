import React from "react";
import Menu from "../../components/Menu/index";
import Pesquisa from "../../components/Pesquisa/index";
import { usePesquisaContext } from "../../context/PesquisaContext";
import CardWrapper from "../../components/CardWrapper/index";
import Loading from "../../components/Loading/index";
import ErrorComponent from "../../components/Error/ErrorComponent/index";

export default function PesquisaPage() {
  const { pesquisa, loading } = usePesquisaContext();
  return (
    <div>
      <Menu />
      <Pesquisa />
      {loading ? (
        <Loading />
      ) : pesquisa && pesquisa.length === 0 ? (
        <ErrorComponent mensagem={"Não foi possível achar dados"} />
      ) : (
        <CardWrapper lista={pesquisa} link={"/pesquisa"} />
      )}
    </div>
  );
}
