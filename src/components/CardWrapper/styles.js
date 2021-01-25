import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  lista: {
    display: "flex",
    listStyleType: "none",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
  },
  items: {
    margin: "5px",
  },
}));
