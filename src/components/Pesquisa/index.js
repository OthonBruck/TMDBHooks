import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { usePesquisaContext } from "../../context/PesquisaContext";
import Errormessage from "../Error/index";
import FieldInput from "../FieldInput/index";
import FieldRadio from "../FieldRadio/index";
import schema from "./schema";
import useStyles from "./styles";

export const Index = () => {
  const onSubmit = async (dado) => {
    listarPesquisa(dado);
  };

  const classes = useStyles();

  const methods = useForm({
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { handleSubmit, errors } = methods;

  const { listarPesquisa } = usePesquisaContext();

  return (
    <div>
      <FormProvider {...methods}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container className={classes.Grid} spacing={3}>
            <Grid item xs={12} className={classes.gridItem}>
              <FieldInput
                size="medium"
                variant="standard"
                label="Pesquisar"
                type="text"
                value=""
                name="pesquisa"
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Errormessage errors={errors} />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <FieldRadio />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Button variant="contained" color="primary" type="submit">
                Pesquisar
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};

export default Index;
