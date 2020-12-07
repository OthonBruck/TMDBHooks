import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import { endpoints } from "../services/endpoints";

const PesquisaContext = createContext();

const initialState = [];

export default function PesquisaContextProvider({ children }) {
  const [pesquisa, setPesquisa] = useState(initialState);
  const [tipo, setTipo] = useState(null);
  const [favoritos, setFavorito] = useState(initialState);

  function adicionarFavorito(favorito) {
    setFavorito((prevState) => [favorito, ...prevState]);
  }

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
      setTipo(dado.tipo);

      if (dado.tipo === "filme") {
        const response = await api.get(endpoints.searchMovie + dado.pesquisa);
        setPesquisa(response.data.results);
      } else if (dado.tipo === "pessoa") {
        const response = await api.get(endpoints.searchPeople + dado.pesquisa);
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
        tipo,
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
    tipo,
  } = useContext(PesquisaContext);

  return {
    listarPesquisa,
    adicionarFavorito,
    setFavorito,
    removerFavorito,
    favoritos,
    pesquisa,
    tipo,
  };
}
