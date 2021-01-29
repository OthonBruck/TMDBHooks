import React from "react";
import { Fragment } from "react";
import { Controller } from "react-hook-form";

export default function FieldWrapper({ as, name, defaultValue, ...rest }) {
  return (
    <Fragment>
      <Controller as={as} name={name} defaultValue={defaultValue} {...rest} />
      </Fragment>
  );
}
