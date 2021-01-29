import React, { useEffect, useLayoutEffect, useState } from "react";
import { Fragment } from "react";
import CardWrapper from "../../../components/CardWrapper";
import Menu from "../../../components/Menu/index";
import SerieDetalhe from "../../../components/SerieDetalhe/index";
import api from "../../../services/api";
import { endpoints } from "../../../services/endpoints";

export default function SeriePage({ match }) {
  const [cast, setCast] = useState([]);
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const response = await api.get(endpoints.tvCast(match.params.id));
      setCast(response.data.cast);
    }
    const fetchSimilar = async () => {
      const response = await api.get(endpoints.tvSimilar(match.params.id));
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
      {match.path === "/favoritos/serie/:id" ? (
        <SerieDetalhe match={match} link={"/favoritos"} />
      ) : match.path === "/pesquisa/serie/:id" ? (
        <SerieDetalhe match={match} link={"/pesquisa"} />
      ) : (
        <SerieDetalhe match={match} link={"/"} />
      )}
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
            Series Semelhantes
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
