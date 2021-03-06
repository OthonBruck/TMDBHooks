//#region imports

import React from "react";
import FilmesCard from "../FilmesCard/index";
import SerieCard from "../SerieCard/index";
import PessoaCard from "../PessoaCard/index";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import { Fragment } from "react";

//#endregion

export default function CardWrapper({ lista, link, height, width }) {
  const classes = useStyles();

  return (
    <Fragment>
      <ul className={classes.lista}>
        {lista &&
          lista.map((result) => {
            return result.first_air_date ? (
              <div className={classes.items} key={result.id}>
                <Link
                  className={classes.link}
                  to={`${link}/serie/${result.id}`}
                >
                  <SerieCard
                    key={result.id}
                    result={result}
                    width={width}
                    height={height}
                  />
                </Link>
              </div>
            ) : result.known_for_department ? (
              <div className={classes.items} key={result.id}>
                <Link
                  className={classes.link}
                  to={`${link}/pessoa/${result.id}`}
                >
                  <PessoaCard
                    key={result.id}
                    result={result}
                    width={width}
                    height={height}
                  />
                </Link>
              </div>
            ) : (
              <div className={classes.items} key={result.id}>
                <Link
                  className={classes.link}
                  to={`${link}/filme/${result.id}`}
                >
                  <FilmesCard
                    key={result.id}
                    result={result}
                    width={width}
                    height={height}
                  />
                </Link>
              </div>
            );
          })}
      </ul>
    </Fragment>
  );
}
