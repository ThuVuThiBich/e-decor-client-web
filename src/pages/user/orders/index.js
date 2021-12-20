import { Box, Button, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import OrdersTable from "components/orders/table";
import React from "react";
import { useStyles } from "./styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export default function Orders() {
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
          <Typography className={classes.title}>My Orders</Typography>
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
