import React from "react";
import CardWrapper from "../../components/CardWrapper/index";
import { useFavoritoContext } from "../../context/FavoritoContext";
import Menu from "../../components/Menu/index";

export default function Favoritos() {
  const { favoritos } = useFavoritoContext();

  return (
    <div>
      <Menu />
      <CardWrapper
        lista={favoritos}
        link={"/favoritos"}
        height={525}
        width={350}
      />
    </div>
  );
}
