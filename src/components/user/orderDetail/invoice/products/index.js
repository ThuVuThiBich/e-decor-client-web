import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import Product from "./product";
import { useStyles } from "./styles";
import { format } from "date-fns";

export default function Products({ order }) {
  const classes = useStyles();
  return (
    <Paper>
      <Box my={2}>
        <Box display="flex" className={classes.head}>
          <Box display="flex" m={2}>
            <Typography className={classes.title}>Order ID: </Typography>
            <Typography>{order?.id}</Typography>
          </Box>
          <Box display="flex" m={2}>
            <Typography className={classes.title}>Placed on: </Typography>
            <Typography>
              {format(new Date(order?.createdAt), "MMM dd, yyyy")}
            </Typography>
          </Box>
        </Box>
        <Box p={2}>
          {order?.orderItems?.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
