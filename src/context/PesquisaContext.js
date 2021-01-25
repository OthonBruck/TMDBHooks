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
    const fetchItem = async () => {
      const response = await api.get(endpoints.trendingAll);
      setDado(response.data.results);
    };
    fetchItem();
  }, []);

  useEffect(() => {
    async function movies() {
      const response = await api.get(
        endpoints.search +
          tipo +
          "/" +
          endpoints.apiTotal +
          "&query=" +
          query +
          "&page=" +
          page
      );
      setPesquisa(response.data.results);
    }
    setLoading(true);
    movies();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {};
  }, [tipo, page, query]);

  async function listarPesquisa(dado) {
    setLoading(true);
    try {
      const response = await api.get(
        endpoints.search +
          dado.tipo +
          "/" +
          endpoints.apiTotal +
          "&query=" +
          dado.pesquisa +
          "&page=" +
          page
      );
      console.log(
        endpoints.API_URL +
          dado.tipo +
          "/" +
          endpoints.API_URL +
          dado.pesquisa +
          "&page=" +
          page
      );
      setPage(1);
      setQuery(dado.pesquisa);
      setTipo(dado.tipo);
      setPesquisa(response.data.results);
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
        selectedValue,
        handleChange,
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
    selectedValue,
    handleChange,
  } = useContext(PesquisaContext);

  return {
    listarPesquisa,
    pesquisa,
    dado,
    loading,
    page,
    setPage,
    query,
    selectedValue,
    handleChange,
  };
}
