import { Box, Button, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Detail from "components/seller/orderDetail";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { getOrder } from "redux/orderRedux";
import { orderSelector } from "redux/selectors";
import { isEmpty } from "underscore";
import { useStyles } from "./styles";

export default function SellerOrderDetail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { order, isLoading, isUpdating } = useSelector(orderSelector);
  useEffect(() => {
    console.log("OrderDetail", id);
    dispatch(getOrder(id));
  }, [dispatch, id, isUpdating]);
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
        <Link to={"/shop/orders"}>
          <Button color="primary" variant="outlined">
            Back to Order List
          </Button>
        </Link>
      </Box>
      <Box>{!isEmpty(order) && !isLoading && <Detail />}</Box>
    </div>
  );
}
