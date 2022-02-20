import { Box, Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import Product from "./product";
import { useStyles } from "./styles";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { getToken } from "utils/helpers";
import { useHistory } from "react-router-dom";

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
                  // dispatch();
                  fetch(
                    `${process.env.REACT_APP_API_URL}/orders/${order?.id}/confirm-receipt`,
                    {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${getToken()}`,
                      },
                    }
                  )
                    .then((response) => response.json())
                    .then((data) => history.push(`/orders/${data.id}`));
                }}
              >
                Confirm
              </Button>
            ) : (
              order?.status !== "delivered" && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    fetch(
                      `${process.env.REACT_APP_API_URL}/orders/${order?.id}/cancel`,
                      {
                        method: "DELETE",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${getToken()}`,
                        },
                      }
                    )
                      .then((response) => response.json())
                      .then((data) => history.push(`/orders`));
                  }}
                >
                  Cancel
                </Button>
              )
            )}

            {/* status: shipped */}
            {/* <Button variant="contained" color="primary">
              Confirm
            </Button> */}
          </Box>
        </Box>
        <Box p={2}>
          {order?.orderItems?.map((product) => (
            <Product
              product={product}
              key={product.id}
              isWritten={order?.status === "delivered"}
            />
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
