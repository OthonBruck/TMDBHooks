import React from "react";
import { Controller } from "react-hook-form";

export default function FieldWrapper({ as, name, defaultValue, ...rest }) {
  return (
    <div>
      <Controller as={as} name={name} defaultValue={defaultValue} {...rest} />
    </div>
  );
}
