import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  img: {
    transition: "transform 0.10s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
    },
  },
}));
