import React from "react";
import { endpoints } from "../../services/endpoints";
import NotFound from "../../assets/images/not.jpg";
import { Fragment } from "react";

export default function ImageDetalhe({ image, height }) {
  return (
    <Fragment>
      {image !== null ? (
        <img height={height} src={endpoints.image + image} alt={image} />
      ) : (
        <img height={height} src={NotFound} alt="Imagem não encontrada" />
      )}
    </Fragment>
  );
}
