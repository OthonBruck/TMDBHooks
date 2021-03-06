import React from "react";
import TextField from "@material-ui/core/TextField";
import FieldWrapper from "../FieldWrapper/index";
import { Fragment } from "react";

export default function FieldInput({
  size,
  variant,
  label,
  type,
  value,
  name,
  defaultValue,
  ...rest
}) {
  return (
    <Fragment>
      <FieldWrapper
        as={
          <TextField
            size={size}
            variant={variant}
            label={label}
            type={type}
            value={value}
          />
        }
        name={name}
        defaultValue={defaultValue}
        {...rest}
      />
    </Fragment>
  );
}
