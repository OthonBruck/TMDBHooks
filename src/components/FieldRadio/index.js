import { Radio, withStyles } from "@material-ui/core";
import React, { useState } from "react";
import FieldWrapper from "../FieldWrapper/index";

const initialState = "pessoa";

export default function Index() {
  const [selectedValue, setSelectedValue] = useState(initialState);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const CustomizedRadio = withStyles({
    root: {
      color: "black",
      "&$checked": {
        color: "white",
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  return (
    <div>
      <FieldWrapper
        as={
          <div>
            <CustomizedRadio
              checked={selectedValue === "pessoa"}
              onChange={handleChange}
              value="pessoa"
            />
            <label>Pessoa</label>
            <CustomizedRadio
              checked={selectedValue === "filme"}
              onChange={handleChange}
              value="filme"
            />
            <label>Filme</label>
            <CustomizedRadio
              checked={selectedValue === "serie"}
              onChange={handleChange}
              value="serie"
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
