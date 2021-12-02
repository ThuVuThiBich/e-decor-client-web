import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Logo from "components/common/Logo";
import React from "react";
import { useStyles } from "./styles";

export default function FeaturedCategories() {
  const classes = useStyles();
  return (
    <section>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6} style={{ border: "1px solid black" }}></Grid>
        <Grid item xs={12} md={6} style={{ border: "1px solid black" }}></Grid>
      </Grid>
    </section>
  );
}
