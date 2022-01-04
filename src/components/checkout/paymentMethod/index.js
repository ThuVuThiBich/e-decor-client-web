import { Box, Button, Divider, Paper, Typography } from "@material-ui/core";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import React from "react";
import { useStyles } from "./styles";

export default function PaymentMethod() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box p={2} mb={4}>
        <Box
          display="flex"
          alignItems="center"
          my={1}
          justifyContent={"space-between"}
        >
          <Box
            display="flex"
            alignItems="center"
            style={{ color: "rgb(210, 63, 87)" }}
          >
            <PaymentOutlinedIcon className={classes.icon} />
            <Typography className={classes.text} style={{ fontSize: 20 }}>
              Payment Method
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mr={10}>
            <Typography className={classes.text}>Cash on Delivery</Typography>
            <Button
              color="primary"
              style={{  marginLeft: 16 }}
              onClick={() => {}}
            >
              Change
            </Button>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          my={2}
          style={{ borderTop: "1px solid #ccc", borderTopStyle: "dashed" }}
          pt={2}
        >
          <Box width="25%" mr={10}>
            <Box
              py={0.5}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className={classes.subText}>
                Merchandise Subtotal:
              </Typography>
              <Typography className={classes.text}>$50</Typography>
            </Box>
            <Box
              py={0.5}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className={classes.subText}>
                Shipping Total:{" "}
              </Typography>
              <Typography className={classes.text}>$10</Typography>
            </Box>
            <Box
              py={0.5}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className={classes.subText}>
                Voucher Discount:{" "}
              </Typography>
              <Typography className={classes.text}>$20</Typography>
            </Box>
            <Divider
              style={{ borderColor: "#ccc", marginBottom: 8, marginTop: 4 }}
            />

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography className={classes.totalText}>
                Total Payment:{" "}
              </Typography>
              <Typography
                className={classes.text}
                style={{
                  color: "rgb(210, 63, 87)",
                  fontSize: 18,
                }}
              >
                $40
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          pt={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          my={2}
          style={{ borderTop: "1px solid #ccc", borderTopStyle: "dashed" }}
        >
          <Typography className={classes.text}>
            By clicking "Place Order", you are agreeing to Our General
            Transaction Terms
          </Typography>
          <Button
            color="primary"
            variant="contained"
            style={{ marginRight: 80, marginLeft: 16 }}
            onClick={() => {}}
          >
            Place Order
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
