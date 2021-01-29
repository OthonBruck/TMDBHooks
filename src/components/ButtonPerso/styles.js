import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  buttons: {
    color: "black",
    background: "aliceblue",
    fontSize: 14,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    border: "1px black solid",
    "&:hover": {
      background: "grey",
    },
  },
}));
