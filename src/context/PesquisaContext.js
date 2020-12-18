import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { endpoints } from "../services/endpoints";

const PesquisaContext = createContext();

const initialState = [];

export default function PesquisaContextProvider({ children }) {
  const [pesquisa, setPesquisa] = useState(initialState);
  const [favoritos, setFavorito] = useState(initialState);
  const [dado, setDado] = useState(initialState);
  const [page, setPage] = useState(3);

  function adicionarFavorito(favorito) {
    setFavorito((prevState) => [favorito, ...prevState]);
  }

  useEffect(() => {
    const fetchItem = async () => {
      const response = await api.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=d61ca0998c8a152c6556e310a4a8e4db"
      );
      setDado(response.data.results);
    };
    fetchItem();
  }, []);

  function removerFavorito(index) {
    const newFavorito = favoritos.filter((id) => id.id !== index);
    setFavorito(newFavorito);
  }

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("favorito"));
    if (dados === null) {
      setFavorito(initialState);
    } else {
      setFavorito(dados);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorito", JSON.stringify(favoritos));
  }, [favoritos]);

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
        adicionarFavorito,
        setFavorito,
        removerFavorito,
        favoritos,
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
  const {
    listarPesquisa,
    adicionarFavorito,
    setFavorito,
    removerFavorito,
    favoritos,
    pesquisa,
    dado,
    page,
    setPage,
  } = useContext(PesquisaContext);

  return {
    listarPesquisa,
    adicionarFavorito,
    setFavorito,
    removerFavorito,
    favoritos,
    pesquisa,
    dado,
    page,
    setPage,
  };
}
