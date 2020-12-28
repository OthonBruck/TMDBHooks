import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  Grid: {
    backgroundColor: "#F44336",
    padding: theme.spacing(1),
    border: "2px solid black",
    borderRadius: "5px",
    marginTop: 10,
    marginLeft: 26,
    width: 500,
    color: "#FFFFFF",
  },
  centralizar: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default useStyles;
