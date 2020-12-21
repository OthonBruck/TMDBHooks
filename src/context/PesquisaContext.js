import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { endpoints } from "../services/endpoints";

const PesquisaContext = createContext();

const initialState = [];

export default function PesquisaContextProvider({ children }) {
  const [pesquisa, setPesquisa] = useState(initialState);
  const [dado, setDado] = useState(initialState);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await api.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=d61ca0998c8a152c6556e310a4a8e4db"
      );
      setDado(response.data.results);
    };
    fetchItem();
  }, []);

  async function listarPesquisa(dado) {
    try {
      if (dado.tipo === "filme") {
        const response = await api.get(endpoints.searchMovie + dado.pesquisa);
        setPesquisa(response.data.results);
      } else if (dado.tipo === "pessoa") {
        const response = await api.get(
          endpoints.searchPeople +
            dado.pesquisa +
            "&page=" +
            page +
            "&include_adult=false"
        );
        setPesquisa(response.data.results);
      } else if (dado.tipo === "serie") {
        const response = await api.get(endpoints.searchTV + dado.pesquisa);
        setPesquisa(response.data.results);
      }
    } catch (err) {
      console.log("fufu");
    }
  }

  return (
    <PesquisaContext.Provider
      value={{
        listarPesquisa,
        pesquisa,
        dado,
        page,
        setPage,
      }}
    >
      {children}
    </PesquisaContext.Provider>
  );
}

export function usePesquisaContext() {
  const { listarPesquisa, pesquisa, dado, page, setPage } = useContext(
    PesquisaContext
  );

  return {
    listarPesquisa,
    pesquisa,
    dado,
    page,
    setPage,
  };
}
