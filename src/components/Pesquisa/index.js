import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import { useForm, FormProvider } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { usePesquisaContext } from "../../context/PesquisaContext";
import Radio from "@material-ui/core/Radio";
import Lista from "../Lista/index";
import { withStyles } from "@material-ui/core";

import schema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import Errormessage from "../Error/index";
import FieldWrapper from "../FieldWrapper/index";

const initialState = "pessoa";

export const Index = () => {
  const onSubmit = async (dado) => {
    listarPesquisa(dado);
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

  const classes = useStyles();

  const methods = useForm({
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  const { handleSubmit, errors } = methods;

  const { listarPesquisa } = usePesquisaContext();

  const [selectedValue, setSelectedValue] = useState(initialState);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container className={classes.Grid} spacing={3}>
            <Grid item xs={12} className={classes.gridItem}>
              <FieldWrapper
                as={
                  <TextField
                    size="medium"
                    variant="standard"
                    label="Pesquisar"
                    type="text"
                    value=""
                  />
                }
                name="pesquisa"
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Errormessage errors={errors} />
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
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
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Button variant="contained" color="primary" type="submit">
                Pesquisar
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
      <Lista />
    </div>
  );
};

export default Index;
