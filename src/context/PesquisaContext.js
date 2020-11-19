import React, { createContext, useContext, useState } from "react";
import api from "../services/api";
import { endpoints } from "../services/endpoints";

const PesquisaContext = createContext();

const initialState = [];

export default function PesquisaContextProvider({ children }) {
  const [pesquisa, setPesquisa] = useState(initialState);
  const [tipo, setTipo] = useState(null);

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
        console.log(pesquisa);
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
        tipo,
      }}
    >
      {children}
    </PesquisaContext.Provider>
  );
}

export function usePesquisaContext() {
  const { listarPesquisa, pesquisa, tipo } = useContext(PesquisaContext);

  return { listarPesquisa, pesquisa, tipo };
}
