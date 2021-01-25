import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: "1px solid #3C3C3C",
    background: "#242526",
    color: "white",
  },
  toolbar: {
    flexWrap: "flex",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: "none",
    color: "white",
    fontSize: 20,
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
