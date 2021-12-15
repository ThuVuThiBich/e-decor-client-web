import { Box, Button, Typography } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import OrdersTable from "components/user/orders/table";
import React from "react";
import { useStyles } from "./styles";

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
          <PersonIcon className={classes.icon} />
          <Typography className={classes.title}>My Orders</Typography>
        </Box>
        <Button color="primary">Get more</Button>
      </Box>
      <Box>
        <OrdersTable />
      </Box>
    </div>
  );
}
