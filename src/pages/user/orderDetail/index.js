import { Box, Button, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Detail from "components/user/orderDetail";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";

export default function OrderDetail() {
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
          <Typography className={classes.title}>Order Details</Typography>
        </Box>
        <Link to={"/orders"}>
          <Button color="primary" variant="outlined">
            Back to Order List
          </Button>
        </Link>
      </Box>
      <Box>
        <Detail />
      </Box>
    </div>
  );
}
