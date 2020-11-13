import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "275px",
    flexWrap: "wrap",
    background: "#666666",
    margin: "5px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <li>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Serie
          </Typography>
          <Typography variant="h5" component="h2">
            benevolent
          </Typography>
          <Typography color="textSecondary">adjective</Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </li>
  );
}
