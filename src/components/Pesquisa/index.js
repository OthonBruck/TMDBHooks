import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import { useForm, FormProvider, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { usePesquisaContext } from "../../context/PesquisaContext";
import Radio from "@material-ui/core/Radio";
import Lista from "../Lista/index";
import { withStyles } from "@material-ui/core";

const initialState = "pessoa";

export const Index = () => {
  const onSubmit = async (dado) => {
    console.log(dado);
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
  });

  const { handleSubmit } = methods;

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
              <Controller
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
              <Controller
                as={
                  <div>
                    <CustomizedRadio
                      checked={selectedValue === "pessoa"}
                      onChange={handleChange}
                      value="pessoa"
                      name="radio-button-demo"
                    />
                    <label>Pessoa</label>
                    <CustomizedRadio
                      checked={selectedValue === "filme"}
                      onChange={handleChange}
                      value="filme"
                      name="radio-button-demo"
                    />
                    <label>Filme</label>
                    <CustomizedRadio
                      checked={selectedValue === "serie"}
                      onChange={handleChange}
                      value="serie"
                      name="radio-button-demo"
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
                Primary
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
