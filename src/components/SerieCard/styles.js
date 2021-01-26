import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    flexWrap: "wrap",
    background: "#424242",
    color: "white",
    transition: "transform 0.10s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
    },
  },
  title: {
    fontSize: 21,
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
}));
