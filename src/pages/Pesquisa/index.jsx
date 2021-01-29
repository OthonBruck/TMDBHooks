import React, { useEffect } from "react";
import { Fragment } from "react";
import CardWrapper from "../../components/CardWrapper/index";
import ErrorComponent from "../../components/Error/ErrorComponent/index";
import Loading from "../../components/Loading/index";
import Menu from "../../components/Menu/index";
import Pagination from "../../components/Pagination/index";
import Pesquisa from "../../components/Pesquisa/index";
import { usePesquisaContext } from "../../context/PesquisaContext";
import { movie, person, tv } from "./services/get-data";

export default function PesquisaPage() {
  const {
    pesquisa,
    loading,
    setPesquisa,
    page,
    query,
    setLoading,
    tipo,
  } = usePesquisaContext();

  useEffect(() => {
    const moviePage = async () => {
      const response = await movie(page, query);
      setPesquisa(response.data);
    }
    const personPage = async () => {
      const response = await person(page, query);
      setPesquisa(response.data);
    }
    const tvPage = async () => {
      const response = await tv(page, query);
      setPesquisa(response.data);
    }
    setLoading(true);
    if (tipo === "movie") {
      moviePage();
    } else if (tipo === "tv") {
      tvPage();
    } else if (tipo === "person") {
      personPage();
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [tipo, page, query, setLoading, setPesquisa]);

  return (
    <Fragment>
      <Menu />
      <Pesquisa />
      {loading ? (
        <Loading />
      ) : pesquisa && pesquisa.length !== 0 ? (
        <div>
          <CardWrapper
            lista={pesquisa.results}
            link={"/pesquisa"}
            height={523}
            width={350}
          />
          <Pagination />
        </div>
      ) : pesquisa && pesquisa.length === 0 ? (
        <ErrorComponent mensagem={"Não foi possível achar dados"} />
      ) : null}
    </Fragment>
  );
}
