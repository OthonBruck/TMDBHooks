import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { Fragment } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { usePesquisaContext } from "../../context/PesquisaContext";
import ButtonPerso from "../ButtonPerso";
import ErrorMessage from "../Error/ErrorMessage/index";
import FieldInput from "../FieldInput/index";
import FieldRadio from "../FieldRadio/index";
import schema from "./schema";
import useStyles from "./styles";

export const Pesquisa = () => {
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
    <Fragment>
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
                className={classes.input}
              />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <ErrorMessage errors={errors} />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <FieldRadio />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <ButtonPerso type="submit">
                Pesquisar
              </ButtonPerso>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Fragment>
  );
};

export default Pesquisa;
