import { Box, Button, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import OrdersTable from "components/orders/table";
import React from "react";
import { useStyles } from "./styles";

export default function SellerOrders() {
  const classes = useStyles();

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Box display="flex" alignItems="center">
          <ShoppingCartIcon className={classes.icon} />
          <Typography className={classes.title}>Orders</Typography>
        </Box>
        <Button color="primary" variant="outlined">
          Get more
        </Button>
      </Box>
      <Box>
        <OrdersTable />
      </Box>
    </div>
  );
}
