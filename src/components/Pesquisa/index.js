import Grid from "@material-ui/core/Grid";
import React from "react";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import { useForm, FormProvider, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { usePesquisaContext } from "../../context/PesquisaContext";

export default function Index() {
  const onSubmit = async (dado) => {
    listarPesquisa(dado.pesquisa);
  };

  const classes = useStyles();

  const methods = useForm({
    reValidateMode: "onBlur",
  });

  const { handleSubmit } = methods;

  const { listarPesquisa } = usePesquisaContext();

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
              <Button variant="contained" color="primary" type="submit">
                Primary
              </Button>
            </form>
          </FormProvider>
        </Grid>
      </Grid>
    </div>
  );
}
