import React from "react";
import { Fragment } from "react";
import "react-multi-carousel/lib/styles.css";
import ErrorComponent from "../../components/Error/ErrorComponent";
import Menu from "../../components/Menu/index";

export default function Error() {
  return (
    <Fragment>
      <Menu />
      <ErrorComponent
        mensagem={"Error: Não foi possivel encontrar esta página"}
      />
    </Fragment>
  );
}
