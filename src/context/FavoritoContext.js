import React, { createContext, useContext, useEffect, useState } from "react";

const FavoritoContext = createContext();

const initialState = [];

export default function FavoritoContextProvider({ children }) {
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

  return (
    <FavoritoContext.Provider
      value={{
        adicionarFavorito,
        removerFavorito,
        favoritos,
      }}
    >
      {children}
    </FavoritoContext.Provider>
  );
}

export function useFavoritoContext() {
  const { adicionarFavorito, removerFavorito, favoritos } = useContext(
    FavoritoContext
  );

  return {
    adicionarFavorito,
    removerFavorito,
    favoritos,
  };
}
