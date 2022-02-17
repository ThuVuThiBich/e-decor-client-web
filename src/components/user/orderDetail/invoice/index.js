import { Box, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { orderSelector } from "redux/selectors";
import Infor from "./info";
import Products from "./products";
import { useStyles } from "./styles";
import Total from "./total";

export default function Invoice() {
  const classes = useStyles();
  const { order } = useSelector(orderSelector);

  return (
    <Box>
      <Products order={order} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Infor order={order} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Total order={order} />
        </Grid>
      </Grid>
    </Box>
  );
}
