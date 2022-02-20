import { Box, Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import Product from "./product";
import { useStyles } from "./styles";
import { format } from "date-fns";

export default function Products({ order }) {
  const classes = useStyles();
  return (
    <Paper>
      <Box my={2}>
        <Box
          display="flex"
          justifyContent="space-between"
          className={classes.head}
          p={2}
        >
          <Box display="flex" alignItems="center" ml={1}>
            <Box display="flex">
              <Typography className={classes.title}>Order ID: </Typography>
              <Typography>{order?.id}</Typography>
            </Box>
            <Box display="flex" pl={1}>
              <Typography className={classes.title}>Placed on: </Typography>
              <Typography>
                {format(new Date(order?.createdAt), "MMM dd, yyyy")}
              </Typography>
            </Box>
          </Box>
          <Box>
            {/* status: pending - processing */}
            <Button variant="contained" color="primary">
              Cancel
            </Button>
            {/* status: shipped */}
            {/* <Button variant="contained" color="primary">
              Confirm
            </Button> */}
          </Box>
        </Box>
        <Box p={2}>
          {order?.orderItems?.map((product) => (
            <Product product={product} key={product.id} isWritten={true} />
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
