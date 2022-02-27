import { Box, Button, Paper, Typography } from "@material-ui/core";
import { format } from "date-fns";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { cancelOrder, confirmOrder } from "redux/orderRedux";
import Product from "./product";
import { useStyles } from "./styles";

export default function Products({ order }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
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
            {order?.status === "shipped" ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  history.push(`/orders/${order.id}`);

                  dispatch(confirmOrder(order.id));
                  // fetch(
                  //   `${process.env.REACT_APP_API_URL}/orders/${order?.id}/confirm-receipt`,
                  //   {
                  //     method: "PATCH",
                  //     headers: {
                  //       "Content-Type": "application/json",
                  //       Authorization: `Bearer ${getToken()}`,
                  //     },
                  //   }
                  // )
                  //   .then((response) => response.json())
                  //   .then((data) => history.push(`/orders/${order.id}`));
                }}
              >
                Confirm
              </Button>
            ) : (
              order?.status !== "shipped" &&
              order?.status !== "delivered" &&
              order?.status !== "canceled" && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    history.push(`/orders/${order.id}`);
                    dispatch(cancelOrder(order.id));
                    // fetch(
                    //   `${process.env.REACT_APP_API_URL}/orders/${order?.id}/cancel`,
                    //   {
                    //     method: "DELETE",
                    //     headers: {
                    //       "Content-Type": "application/json",
                    //       Authorization: `Bearer ${getToken()}`,
                    //     },
                    //   }
                    // )
                    //   .then((response) => response.json())
                    //   .then((data) => history.push(`/orders/${order.id}`));
                  }}
                >
                  Cancel
                </Button>
              )
            )}

            {/* status: shipped */}
            {order?.status === "canceled" && (
              <Button variant="contained" color="primary">
                Order Again
              </Button>
            )}
          </Box>
        </Box>
        <Box p={2}>
          {order?.orderItems?.map((product) => (
            <Product
              orderItemId={product?.id}
              product={product}
              key={product?.id}
              isDelivered={order?.status === "delivered"}
              hasFeedback={product?.feedback}
            />
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
