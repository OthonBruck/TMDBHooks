import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  gridContainer: {
    width: 1000,
    marginTop: 10,
    flexWrap: "wrap",
    background: "#424242",
    color: "white",
    border: "2px solid black",
    borderRadius: "5px",
    padding: theme.spacing(1),
  },
  gridItem: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  root: {
    width: "400px",
    height: 545,
    flexWrap: "wrap",
    background: "#424242",
    margin: "5px",
    color: "white",
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
  gridCard: {
    marginTop: 3,
  },
  media: {
    width: "250px",
    height: "365px",
  },
}));
