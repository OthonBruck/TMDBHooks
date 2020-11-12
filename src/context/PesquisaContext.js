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
      const response = await api.get(endpoints.searchMovie + dado.pesquisa);
      setPesquisa(response.data.results);
      setTipo(dado.tipo);
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
