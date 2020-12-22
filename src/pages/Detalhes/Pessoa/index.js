import React from "react";
import Menu from "../../../components/Menu/index";
import PessoaDetalhe from "../../../components/PessoaDetalhe/index";

export default function PessoaPage({ match }) {
  return (
    <div>
      <Menu />
      <PessoaDetalhe match={match} />
    </div>
  );
}
