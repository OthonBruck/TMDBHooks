import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import { useForm, FormProvider, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { usePesquisaContext } from "../../context/PesquisaContext";
import Radio from "@material-ui/core/Radio";
import Lista from "../Lista/index";

const initialState = "pessoa";

export default function Index() {
  const onSubmit = async (dado) => {
    console.log(dado);
    listarPesquisa(dado);
  };

  const classes = useStyles();

  const methods = useForm({
    reValidateMode: "onBlur",
  });

  const { handleSubmit } = methods;

  const { listarPesquisa } = usePesquisaContext();

  const [selectedValue, setSelectedValue] = useState(initialState);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <Grid container className={classes.Grid} spacing={3}>
        <Grid item xs={12}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Controller
                as={
                  <TextField
                    variant="standard"
                    label="dsadsa"
                    type="text"
                    value=""
                  />
                }
                name="pesquisa"
                defaultValue=""
              />
              <Controller
                as={
                  <div>
                    <label>Pessoa</label>
                    <Radio
                      checked={selectedValue === "pessoa"}
                      onChange={handleChange}
                      value="pessoa"
                      name="radio-button-demo"
                    />
                    <label>Filme</label>
                    <Radio
                      checked={selectedValue === "filme"}
                      onChange={handleChange}
                      value="filme"
                      name="radio-button-demo"
                    />
                    <label>Serie</label>
                    <Radio
                      checked={selectedValue === "serie"}
                      onChange={handleChange}
                      value="serie"
                      name="radio-button-demo"
                    />
                  </div>
                }
                name="tipo"
                defaultValue={selectedValue}
              />
              <Button variant="contained" color="primary" type="submit">
                Primary
              </Button>
            </form>
          </FormProvider>
        </Grid>
      </Grid>
      <Lista />
    </div>
  );
}
