import { Card, CardHeader, CardMedia } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";
import ButtonPerso from "../ButtonPerso";
import { useStyles } from "./styles";

export default function ModalVideo({ results, title }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    const fetchMovieTrailer = async (results) => {
      const response = await api.get(endpoints.movieVideo(results.id));
      if (response.data["results"][0] !== undefined) {
        setTrailer(response.data["results"][0].key);
      }
    };
    const fetchTVTrailer = async (results) => {
      const response = await api.get(endpoints.tvVideo(results.id));
      if (response.data["results"][0] !== undefined) {
        setTrailer(response.data["results"][0].key);
      }
    };
    if (results.runtime) {
      fetchMovieTrailer(results);
    } else if (results.episode_run_time) {
      fetchTVTrailer(results);
    }
  }, [setTrailer, trailer, results]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <ButtonPerso
        onClick={handleOpen}
        disabled={trailer === undefined}
      >
        Trailer
      </ButtonPerso>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card style={{ backgroundColor: "#1B1B1B", color: "white" }}>
            <CardHeader title={title} />
            <CardMedia>
              <ReactPlayer
                playing
                url={"https://www.youtube.com/watch?v=" + trailer}
                controls={true}
              />
            </CardMedia>
          </Card>
        </Fade>
      </Modal>
    </Fragment>
  );
}
