import Grid from "@material-ui/core/Grid";
import React from "react";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import { useForm, FormProvider } from "react-hook-form";

export default function Index() {
  const onSubmit = async () => {};

  const classes = useStyles();

  const methods = useForm({
    reValidateMode: "onBlur",
  });

  const { handleSubmit } = methods;

  return (
    <div>
      <Grid container className={classes.Grid} spacing={3}>
        <Grid item xs={12}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
