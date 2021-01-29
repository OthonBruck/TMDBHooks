import { CardMedia } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import { endpoints } from "../../services/endpoints";
import NotFound from "../../assets/images/not.jpg";
import { Fragment } from "react";

export default function MediaCard({ image }) {
  const classes = useStyles();
  return (
    <Fragment>
      {image !== null ? (
        <CardMedia
          className={classes.media}
          component="img"
          image={endpoints.image + image}
        />
      ) : (
        <CardMedia className={classes.media} component="img" image={NotFound} />
      )}
    </Fragment>
  );
}
