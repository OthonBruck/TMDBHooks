import React, { useEffect, useLayoutEffect, useState } from "react";
import { Fragment } from "react";
import CardWrapper from "../../../components/CardWrapper";
import Menu from "../../../components/Menu/index";
import PessoaDetalhe from "../../../components/PessoaDetalhe/index";
import api from "../../../services/api";
import { endpoints } from "../../../services/endpoints";

export default function PessoaPage({ match }) {
  const [movieCredits, setMovieCredits] = useState([]);
  const [tvCredits, setTvCredits] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      const response = await api.get(
        endpoints.personMoviesCredits(match.params.id)
      );
      setMovieCredits(response.data.cast);
    }
    const fetchTvCredits = async () => {
      const response = await api.get(
        endpoints.personTvsCredits(match.params.id)
      );
      setTvCredits(response.data.cast);
    }
    fetchMovieCredits();
    fetchTvCredits();
  }, [match.params.id]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <Fragment>
      <Menu />
      {match.path === "/favoritos/pessoa/:id" ? (
        <PessoaDetalhe match={match} link={"/favoritos"} />
      ) : match.path === "/pesquisa/pessoa/:id" ? (
        <PessoaDetalhe match={match} link={"/pesquisa"} />
      ) : (
        <PessoaDetalhe match={match} link={"/"} />
      )}

      {movieCredits && movieCredits.length !== 0 && (
        <div>
          <p style={{ fontWeight: "bolder", marginLeft: 10, fontSize: 30 }}>
            Filmes participados
          </p>
          <CardWrapper
            lista={movieCredits.slice(0, 5)}
            link={""}
            height={525}
            width={350}
          />
        </div>
      )}

      {tvCredits && tvCredits.length !== 0 && (
        <div>
          <p style={{ fontWeight: "bolder", marginLeft: 10, fontSize: 30 }}>
            Series participadas
          </p>
          <CardWrapper
            lista={tvCredits.slice(0, 5)}
            link={""}
            height={525}
            width={350}
          />
        </div>
      )}
    </Fragment>
  );
}
