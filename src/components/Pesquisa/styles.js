import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Grid: {
    backgroundColor: "#464646",
    padding: theme.spacing(1),
    border: "2px solid black",
    borderRadius: "5px",
    marginTop: 10,
    marginLeft: 26,
    width: 500,
    color: "#FFFFFF",
    fontSize: 17,
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& label.Mui-focused": {
      color: "#FFFFFF",
    },
    "& label": {
      color: "#FFFFFF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FFFFFF",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#FFFFFF",
    },
  },
  radio: {
    color: "black",
    "&$checked": {
      color: "#FFFFFF",
    },
  },
  checked: {},
}));
export default useStyles;
