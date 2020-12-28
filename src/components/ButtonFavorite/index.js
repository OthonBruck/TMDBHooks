import Button from "@material-ui/core/Button";
import React from "react";
import { useFavoritoContext } from "../../context/FavoritoContext";

export default function ButtonFavorite({ data }) {
  const {
    adicionarFavorito,
    removerFavorito,
    favoritos,
  } = useFavoritoContext();
  return (
    <div>
      {favoritos.find((dados) => dados.id === data.id) !== undefined ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => removerFavorito(data.id)}
        >
          Remover Favorito
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => adicionarFavorito(data)}
        >
          Adicionar Favorito
        </Button>
      )}
    </div>
  );
}
