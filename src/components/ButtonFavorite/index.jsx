import React from "react";
import { Fragment } from "react";
import { useFavoritoContext } from "../../context/FavoritoContext";
import ButtonPerso from "../ButtonPerso/index";

export default function ButtonFavorite({ data }) {
  const {
    adicionarFavorito,
    removerFavorito,
    favoritos,
  } = useFavoritoContext();
  return (
    <Fragment>
      {favoritos.find((dados) => dados.id === data.id) !== undefined ? (
        <ButtonPerso onClick={() => removerFavorito(data.id)}>
          Remover Favorito
        </ButtonPerso>
      ) : (
        <ButtonPerso onClick={() => adicionarFavorito(data)}>
          Adicionar Favorito
        </ButtonPerso>
      )}
    </Fragment>
  );
}
