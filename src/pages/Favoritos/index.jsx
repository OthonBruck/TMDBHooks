import React from "react";
import CardWrapper from "../../components/CardWrapper/index";
import { useFavoritoContext } from "../../context/FavoritoContext";
import Menu from "../../components/Menu/index";
import { Fragment } from "react";

export default function Favoritos() {
  const { favoritos } = useFavoritoContext();

  return (
    <Fragment>
      <Menu />
      <CardWrapper
        lista={favoritos}
        link={"/favoritos"}
        height={525}
        width={350}
      />
    </Fragment>
  );
}
