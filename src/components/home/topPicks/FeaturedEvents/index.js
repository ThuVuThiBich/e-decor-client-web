import { Box, Paper } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export default function FeaturedEvents(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} variant="outlined">
      <Box
        className={classes.wrapper}
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={2}
        pb={4}
        mb={2}
      >
        <h2 className={classes.text}>{props.event.name}</h2>
        <p className={classes.subText}>{props.event.description}</p>
        <a href="/">
          <small className={classes.link}>SHOP NOW</small>
        </a>
      </Box>

      <img
        width="100%"
        src="https://images.unsplash.com/photo-1595588982209-5c45ceb4f350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
        display="block"
        className={classes.image}
      />
    </Paper>
  );
}
