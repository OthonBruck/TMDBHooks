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

  useEffect(() => {
    const fetchItem = async () => {
      const response = await api.get(endpoints.trendingAll);
      setDado(response.data.results);
    };
    fetchItem();
  }, []);

  useEffect(() => {
    async function movies() {
      const response = await api.get(
        endpoints.searchMovie + query + "&page=" + page
      );
      setPesquisa(response.data.results);
    }
    async function people() {
      const response = await api.get(
        endpoints.searchPeople + query + "&page=" + page
      );
      setPesquisa(response.data.results);
    }
    async function serie() {
      const response = await api.get(
        endpoints.searchTV + "&page=" + page + "&query=" + query
      );
      setPesquisa(response.data.results);
    }
    setLoading(true);
    if (tipo === "filme") {
      movies();
    } else if (tipo === "pessoa") {
      people();
    } else if (tipo === "serie") {
      serie();
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {};
  }, [tipo, page, query]);

  async function listarPesquisa(dado) {
    setLoading(true);
    try {
      if (dado.tipo === "filme") {
        const response = await api.get(
          endpoints.searchMovie + dado.pesquisa + "&page=" + page
        );
        setPage(1);
        setQuery(dado.pesquisa);
        setTipo(dado.tipo);
        setPesquisa(response.data.results);
      } else if (dado.tipo === "pessoa") {
        const response = await api.get(
          endpoints.searchPeople + dado.pesquisa + "&page=" + page
        );
        setPage(1);
        setQuery(dado.pesquisa);
        setTipo(dado.tipo);
        setPesquisa(response.data.results);
      } else if (dado.tipo === "serie") {
        const response = await api.get(
          endpoints.searchTV + "&page=" + page + "&query=" + dado.pesquisa
        );
        setPage(1);
        setQuery(dado.pesquisa);
        setTipo(dado.tipo);
        setPesquisa(response.data.results);
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
        page,
        setPage,
        query,
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
    query,
  } = useContext(PesquisaContext);

  return {
    listarPesquisa,
    pesquisa,
    dado,
    loading,
    page,
    setPage,
    query,
  };
}
