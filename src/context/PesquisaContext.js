import React, { createContext, useContext } from "react";

export const PesquisaContext = createContext();

const initialState = [];

export default function PesquisaContextProvider({ children }) {
  function listarPesquisa() {
    console.log("ODKSOKODSAKODS");
    //tenho que fazer o resto
  }
  return (
    <PesquisaContext.Provider
      value={{
        listarPesquisa,
      }}
    >
      {children}
    </PesquisaContext.Provider>
  );
}

export function usePesquisaContext() {
  const { listarPesquisa } = useContext(PesquisaContext);

  return { listarPesquisa };
}
