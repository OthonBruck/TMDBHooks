import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { endpoints } from "../services/endpoints";

const PesquisaContext = createContext();

const initialState = [];

export default function PesquisaContextProvider({ children }) {
  const [pesquisa, setPesquisa] = useState(null);
  const [dado, setDado] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(initialState);
  const [tipo, setTipo] = useState();
  const [selectedValue, setSelectedValue] = useState("person");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    async function moviePage() {
      const response = await movie(page, query);
      setPesquisa(response.data.results);
    }
    async function personPage() {
      const response = await person(page, query);
      setPesquisa(response.data.results);
    }
    async function tvPage() {
      const response = await tv(page, query);
      setPesquisa(response.data.results);
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
    return () => {};
  }, [tipo, page, query]);

  function movie(page, query) {
    const queryParams = new URLSearchParams({ page, query }).toString();
    return api.get(endpoints.searchMovie(queryParams));
  }
  function person(page, query) {
    const queryParams = new URLSearchParams({ page, query }).toString();
    return api.get(endpoints.searchPerson(queryParams));
  }
  function tv(page, query) {
    const queryParams = new URLSearchParams({ page, query }).toString();
    return api.get(endpoints.searchTV(queryParams));
  }

  function setar(pesquisar, tipo, query) {
    setPesquisa(pesquisar);
    setPage(1);
    setTipo(tipo);
    setQuery(query);
  }

  async function listarPesquisa(dado) {
    setLoading(true);
    try {
      if (dado.tipo === "movie") {
        const response = await movie(1, dado.pesquisa);
        setar(response.data.results, dado.tipo, dado.pesquisa);
      } else if (dado.tipo === "tv") {
        const response = await tv(1, dado.pesquisa);
        setar(response.data.results, dado.tipo, dado.pesquisa);
      } else if (dado.tipo === "person") {
        const response = await person(1, dado.pesquisa);
        setar(response.data.results, dado.tipo, dado.pesquisa);
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
        dado,
        loading,
        selectedValue,
        handleChange,
        page,
        setPage,
        setDado,
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
    dado,
    loading,
    page,
    setPage,
    selectedValue,
    handleChange,
    setDado,
  } = useContext(PesquisaContext);

  return {
    listarPesquisa,
    pesquisa,
    dado,
    loading,
    page,
    setPage,
    selectedValue,
    handleChange,
    setDado,
  };
}
