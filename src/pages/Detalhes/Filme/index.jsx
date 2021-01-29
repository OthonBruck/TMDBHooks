import React, { useEffect, useLayoutEffect, useState } from "react";
import Menu from "../../../components/Menu/index";
import FilmeDetalhe from "../../../components/FilmeDetalhe/index";
import { endpoints } from "../../../services/endpoints";
import api from "../../../services/api";
import CardWrapper from "../../../components/CardWrapper";
import { Fragment } from "react";

export default function FilmePage({ match }) {
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const response = await api.get(endpoints.movieCast(match.params.id));
      setCast(response.data.cast);
    }
    const fetchSimilar = async () => {
      const response = await api.get(endpoints.movieSimilar(match.params.id));
      setSimilar(response.data.results);
    }
    fetchCast();
    fetchSimilar();
  }, [match.params.id]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Fragment>
      <Menu />
        <FilmeDetalhe match={match} />
      {cast && cast.length !== 0 && (
        <div>
          <p style={{ fontWeight: "bolder", marginLeft: 10, fontSize: 30 }}>
            Elenco
          </p>
          <CardWrapper
            lista={cast.slice(0, 5)}
            link={""}
            height={490}
            width={350}
          />
        </div>
      )}
      {similar && similar.length !== 0 && (
        <div>
          <p style={{ fontWeight: "bolder", marginLeft: 10, fontSize: 30 }}>
            Filmes semelhantes
          </p>
          <CardWrapper
            lista={similar.slice(0, 5)}
            link={""}
            height={525}
            width={350}
          />
        </div>
      )}
    </Fragment>
  );
}
