import { Box, Grid } from "@material-ui/core";
import React from "react";
import Infor from "./info";
import Products from "./products";
import { useStyles } from "./styles";
import Total from "./total";

export default function Invoice() {
  const classes = useStyles();

  return (
    <Box>
      <Products />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Infor />
        </Grid>
        <Grid item xs={12} md={6}>
          <Total />
        </Grid>
      </Grid>
    </Box>
  );
}
