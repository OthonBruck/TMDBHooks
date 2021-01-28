import React, { createContext, useContext, useState } from "react";
import { movie, person, tv } from "../pages/Pesquisa/services/get-data";

const PesquisaContext = createContext();

const initialState = [];

export default function PesquisaContextProvider({ children }) {
  const [pesquisa, setPesquisa] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(initialState);
  const [tipo, setTipo] = useState();
  const [selectedValue, setSelectedValue] = useState("person");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  function pagination(pesquisar, tipo, query) {
    setPesquisa(pesquisar.results);
    setPage(1);
    setTipo(tipo);
    setQuery(query);
  }

  async function listarPesquisa(dado) {
    setLoading(true);
    try {
      if (dado.tipo === "movie") {
        const response = await movie(1, dado.pesquisa);
        pagination(response.data, dado.tipo, dado.pesquisa);
      } else if (dado.tipo === "tv") {
        const response = await tv(1, dado.pesquisa);
        pagination(response.data, dado.tipo, dado.pesquisa);
      } else if (dado.tipo === "person") {
        const response = await person(1, dado.pesquisa);
        pagination(response.data, dado.tipo, dado.pesquisa);
      }
    } catch (err) {}
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <PesquisaContext.Provider
      value={{
        listarPesquisa,
        pesquisa,
        loading,
        selectedValue,
        handleChange,
        page,
        setPage,
        setLoading,
        query,
        tipo,
        setPesquisa,
      }}
    >
      {children}
    </PesquisaContext.Provider>
  );
}

export function usePesquisaContext() {
  const {
    listarPesquisa,
    pesquisa,
    loading,
    page,
    setPage,
    selectedValue,
    handleChange,
    setLoading,
    query,
    tipo,
    setPesquisa,
  } = useContext(PesquisaContext);

  return {
    listarPesquisa,
    pesquisa,
    loading,
    page,
    setPage,
    selectedValue,
    handleChange,
    setLoading,
    query,
    tipo,
    setPesquisa,
  };
}
