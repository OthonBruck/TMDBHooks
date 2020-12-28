import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "wrap",
    background: "#424242",
    color: "white",
    "&:hover": {
      opacity: 0.9,
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  foto: {
    display: "flex",
    justifyContent: "center",
    margin: 10,
  },
  gridItem: {
    marginTop: 3,
  },
  media: {
    width: "250px",
    height: "365px",
  },
}));
