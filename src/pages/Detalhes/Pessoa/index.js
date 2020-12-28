import React from "react";
import Menu from "../../../components/Menu/index";
import PessoaDetalhe from "../../../components/PessoaDetalhe/index";

export default function PessoaPage({ match }) {
  return (
    <div>
      <Menu />
      {match.path === "/favoritos/pessoa/:id" ? (
        <PessoaDetalhe match={match} link={"/favoritos"} />
      ) : match.path === "/pesquisa/pessoa/:id" ? (
        <PessoaDetalhe match={match} link={"/pesquisa"} />
      ) : (
        <PessoaDetalhe match={match} link={"/"} />
      )}
    </div>
  );
}
