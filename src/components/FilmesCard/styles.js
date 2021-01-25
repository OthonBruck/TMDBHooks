import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    flexWrap: "wrap",
    background: "#424242",
    color: "white",
    "&:hover": {
      opacity: 0.9,
    },
  },
  title: {
    fontSize: 21,
  },
  foto: {
    display: "flex",
    justifyContent: "center",
    margin: 10,
  },
  gridItem: {
    marginTop: 3,
  },
}));
