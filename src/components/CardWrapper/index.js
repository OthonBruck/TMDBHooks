//#region imports

import React from "react";
import FilmesCard from "../FilmesCard/index";
import SerieCard from "../SerieCard/index";
import PessoaCard from "../PessoaCard/index";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

//#endregion

export default function CardWrapper({ lista, link }) {
  const classes = useStyles();

  return (
    <div>
      <ul className={classes.lista}>
        {lista &&
          lista.map((result) => {
            return result.first_air_date ? (
              <div className={classes.items} key={result.id}>
                <Link
                  className={classes.link}
                  to={`${link}/serie/${result.id}`}
                >
                  <SerieCard key={result.id} result={result} />
                </Link>
              </div>
            ) : result.known_for_department ? (
              <div className={classes.items} key={result.id}>
                <Link
                  className={classes.link}
                  to={`${link}/pessoa/${result.id}`}
                >
                  <PessoaCard key={result.id} result={result} />
                </Link>
              </div>
            ) : (
              <div className={classes.items} key={result.id}>
                <Link
                  className={classes.link}
                  to={`${link}/filme/${result.id}`}
                >
                  <FilmesCard key={result.id} result={result} />
                </Link>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
