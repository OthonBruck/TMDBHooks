import React from "react";
import ButtonPerso from "../ButtonPerso/index";

export default function ButtonReturn() {
  return (
    <div>
      <ButtonPerso onClick={() => window.history.back()}>VOLTAR</ButtonPerso>
    </div>
  );
}
