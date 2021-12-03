import { Box, Grid, Paper, Typography } from "@material-ui/core";
import calendar from "assets/images/categories/calendar.png";
import candle from "assets/images/categories/candle.png";
import clock from "assets/images/categories/clock.png";
import lamp from "assets/images/categories/lamp.png";
import pinBoard from "assets/images/categories/pin-board.png";
import React from "react";
import Post from "./Post";
import { useStyles } from "./styles";

export default function IdeasBlog() {
  const classes = useStyles();
  return (
    <section style={{ marginBottom: 64 }}>
      <Box my={4}>
        <Typography className={classes.headText}>
          Get Ideas from our Blog
        </Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Post />
        </Grid>
        <Grid item xs={12} md={6}>
          <Post />
        </Grid>
      </Grid>
    </section>
  );
}
