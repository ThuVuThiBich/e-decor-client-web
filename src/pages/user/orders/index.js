import { Box, Button, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import OrdersTable from "components/orders/table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "redux/orderRedux";
import { orderSelector } from "redux/selectors";
import { useStyles } from "./styles";

export default function Orders() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    dispatch(getOrders({ limit: 5, page }));
  }, [dispatch, page]);
  const { orders } = useSelector(orderSelector);
  console.log(orders);
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
        <OrdersTable page={page} handleChangePage={handleChangePage} />
      </Box>
    </div>
  );
}
