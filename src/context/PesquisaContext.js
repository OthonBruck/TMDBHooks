import React, { createContext, useContext, useState } from "react";
import api from "../services/api";
import { endpoints } from "../services/endpoints";

export const PesquisaContext = createContext();

const initialState = [];

export default function PesquisaContextProvider({ children }) {
  const [pesquisa, setPesquisa] = useState(initialState);
  async function listarPesquisa(dado) {
    try {
      const response = await api.get(endpoints.searchMovie + dado);
      console.log(response);
      setPesquisa(response);
      console.log(dado);
    } catch (err) {
      console.log("fufu");
    }
  }
  return (
    <PesquisaContext.Provider
      value={{
        listarPesquisa,
        pesquisa,
      }}
    >
      {children}
    </PesquisaContext.Provider>
  );
}

export function usePesquisaContext() {
  const { listarPesquisa, pesquisa } = useContext(PesquisaContext);

  return { listarPesquisa, pesquisa };
}
