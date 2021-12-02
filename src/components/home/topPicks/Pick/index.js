import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import Rating from "material-ui-rating";
import { Link } from "react-router-dom";

export default function Pick(props) {
  const classes = useStyles();
  const smallStyles = {
    iconButton: {
      width: 32,
      height: 32,
      padding: 16,
    },
    icon: {
      width: 16,
      height: 16,
    },
  };
  const MyRating = ({ classes }) => (
    <Rating
      value={3}
      max={5}
      // onChange={(i) => console.log("onChange " + i)}
      classes={classes}
      readOnly={true}
    />
  );
  const SmallRating = withStyles(smallStyles)(MyRating);
  return (
    <Box
      className={classes.root}
      //  style={{ width: 100 }}
    >
      {/* <h2 className={classes.text}>{props.event.name}</h2>
        <p className={classes.subText}>{props.event.description}</p> */}
      <Link to="/" className={classes.image}>
        <Box>
          <img
            width={"100%"}
            src="https://via.placeholder.com/100"
            alt=""
            display="block"
            className={classes.image}
          />
        </Box>
      </Link>
      <Box mt={2}>
        <Box>
          <h4>{props.item.name}</h4>
          <SmallRating />
          <span>$20.00</span>
        </Box>
      </Box>
    </Box>
  );
}
