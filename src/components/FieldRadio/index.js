import React from "react";
import { usePesquisaContext } from "../../context/PesquisaContext";
import FieldWrapper from "../FieldWrapper/index";
import { CustomizedRadio } from "./styles";

export default function FieldRadio() {
  const { selectedValue, handleChange } = usePesquisaContext();

  return (
    <div>
      <FieldWrapper
        as={
          <div>
            <CustomizedRadio
              checked={selectedValue === "person"}
              onChange={handleChange}
              value="person"
            />
            <label>Pessoa</label>
            <CustomizedRadio
              checked={selectedValue === "movie"}
              onChange={handleChange}
              value="movie"
            />
            <label>Filme</label>
            <CustomizedRadio
              checked={selectedValue === "tv"}
              onChange={handleChange}
              value="tv"
            />
            <label>Serie</label>
          </div>
        }
        name="tipo"
        defaultValue={selectedValue}
      />
    </div>
  );
}
