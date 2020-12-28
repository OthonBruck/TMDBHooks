import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { endpoints } from "../services/endpoints";

const PesquisaContext = createContext();

const initialState = [];

export default function PesquisaContextProvider({ children }) {
  const [pesquisa, setPesquisa] = useState(null);
  const [dado, setDado] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await api.get(endpoints.trendingAll);
      setDado(response.data.results);
    };
    fetchItem();
  }, []);

  async function listarPesquisa(dado) {
    setLoading(true);
    try {
      if (dado.tipo === "filme") {
        const response = await api.get(endpoints.searchMovie + dado.pesquisa);
        setPesquisa(response.data.results);
      } else if (dado.tipo === "pessoa") {
        const response = await api.get(
          endpoints.searchPeople + dado.pesquisa + "&page=&include_adult=false"
        );
        setPesquisa(response.data.results);
      } else if (dado.tipo === "serie") {
        const response = await api.get(endpoints.searchTV + dado.pesquisa);
        setPesquisa(response.data.results);
      }
    } catch (err) {}
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log(pesquisa);
  }

  return (
    <PesquisaContext.Provider
      value={{
        listarPesquisa,
        pesquisa,
        dado,
        loading,
      }}
    >
      {children}
    </PesquisaContext.Provider>
  );
}

export function usePesquisaContext() {
  const { listarPesquisa, pesquisa, dado, loading } = useContext(
    PesquisaContext
  );

  return {
    listarPesquisa,
    pesquisa,
    dado,
    loading,
  };
}
