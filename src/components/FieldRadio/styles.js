import { Radio, withStyles } from "@material-ui/core";

export const CustomizedRadio = withStyles({
  root: {
    color: "black",
    "&$checked": {
      color: "white",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
