import React from "react";
import ErrorComponent from "../../components/Error/ErrorComponent";
import Menu from "../../components/Menu/index";

export default function Error() {
  return (
    <div>
      <Menu />
      <ErrorComponent
        mensagem={"Error: Não foi possivel encontrar esta página"}
      />
    </div>
  );
}
