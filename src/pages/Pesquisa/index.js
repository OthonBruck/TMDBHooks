import React from "react";
import CardWrapper from "../../components/CardWrapper/index";
import ErrorComponent from "../../components/Error/ErrorComponent/index";
import Loading from "../../components/Loading/index";
import Menu from "../../components/Menu/index";
import Pagination from "../../components/Pagination/index";
import Pesquisa from "../../components/Pesquisa/index";
import { usePesquisaContext } from "../../context/PesquisaContext";

export default function PesquisaPage() {
  const { pesquisa, loading } = usePesquisaContext();
  return (
    <div>
      <Menu />
      <Pesquisa />
      {loading ? (
        <Loading />
      ) : pesquisa && pesquisa.length !== 0 ? (
        <div>
          <CardWrapper
            lista={pesquisa}
            link={"/pesquisa"}
            height={523}
            width={350}
          />
          <Pagination />
        </div>
      ) : pesquisa && pesquisa.length === 0 ? (
        <ErrorComponent mensagem={"Não foi possível achar dados"} />
      ) : null}
    </div>
  );
}
