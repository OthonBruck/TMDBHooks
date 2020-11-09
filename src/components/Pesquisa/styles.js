import { makeStyles } from "@material-ui/core";

export const useStyles = () => {
  const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    Grid: {
      backgroundColor: "#5817D1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1),
      border: "2px solid black",
      borderRadius: "5px",
    },
  }));
  return styles();
};
export default useStyles;
